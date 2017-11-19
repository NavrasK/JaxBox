import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const playerslist = new Mongo.Collection('player');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('player', function tasksPublication() {
    return playerlist.find();
  });
}

Meteor.methods({
  'player.ready' (text) {
    check(text, String);

    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    playerlist.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'player.remove' (taskId) {
    check(taskId, String);

    const task = playerlist.findOne(taskId);
    if (task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    playerlist.remove(taskId);
  },
});
