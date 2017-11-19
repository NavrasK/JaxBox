import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './createServer.html';
import uiRouter from 'angular-ui-router';
import { name as serverBrowser } from '../serverbrowser/serverBrowser';
import { name as serverlist } from '../../api/servers';
import { name as playerlist } from '../../api/players';

class CreateServerCtrl {
  constructor($scope) {
    console.log("created!");
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
    $scope.newServer = function(){
      console.log($scope.serverName,
      $scope.maxPlayers,
      $scope.pwd);
      Meteor.call('servers.insert', $scope.serverName, $scope.maxPlayers, $scope.pwd);
      //window.location = "/servers";
    }
  }
}

export default angular.module('createServer', [
  angularMeteor,
  uiRouter
])
  .component('createServer', {
  templateUrl: 'imports/components/createserver/createServer.html',
  controller: ['$scope', CreateServerCtrl]
})
.config(config);
function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('create', {
      url: '/create',
      template: '<create-server></create-server>'
    })
}
