import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './createServer.html';
import uiRouter from 'angular-ui-router';
import { name as serverBrowser } from '../serverbrowser/serverBrowser';

class CreateServerCtrl {
  constructor($scope) {
    console.log("created!");
    $scope.viewModel(this);
    this.helpers({
      currentUser() {
        return Meteor.user();
      }
    });
    $scope.backToServers = function(){
      window.location = "/servers";
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
