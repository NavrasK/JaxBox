import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const serverlist = new Mongo.Collection('servers');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('servers', function tasksPublication() {
    return serverlist.find();
  });
}

Meteor.methods({
  'servers.insert' (name, maxp, pwd) {
    check(name, String);
    check(pwd, String);

    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    serverlist.insert({
      Name: name,
      MaxPlayers: maxp,
      owner: Meteor.userId(),
      username: Meteor.user().username,
      Password: pwd,
    });
  },
  'servers.remove' (serverId) {
    check(serverId, String);

    const server = serverlist.findOne(serverId);
    if (server.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    serverlist.remove(serverId);
  },
});
