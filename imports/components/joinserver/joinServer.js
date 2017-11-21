import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './joinServer.html';
import uiRouter from 'angular-ui-router';
import { name as serverBrowser } from '../serverbrowser/serverBrowser';
import { name as serverlist } from '../../api/servers';
import { name as playerlist } from '../../api/players';

class JoinServerCtrl {
  constructor($scope) {
    console.log("joining...");
    $scope.viewModel(this);
    this.subscribe('servers');
    this.helpers({
      currentUser() {
        return Meteor.user();
      }
    });
    $scope.backToServers = function(){
      window.location = "/servers";
    }
    $scope.joinserver = function(serve){
      Meteor.call('servers.join', serve._id);
    }
  }
}

export default angular.module('joinServer', [
  angularMeteor,
  uiRouter
])
  .component('joinServer', {
  templateUrl: 'imports/components/joinserver/joinServer.html',
  controller: ['$scope', JoinServerCtrl]
})
.config(config);
function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('join', {
      url: '/join',
      template: '<join-server></join-server>'
    })
}
