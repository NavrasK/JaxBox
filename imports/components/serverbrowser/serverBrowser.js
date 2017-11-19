import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './serverBrowser.html';
import uiRouter from 'angular-ui-router';
import { name as splashScreen } from '../splashscreen/splashScreen';
import { name as joinServer } from '../joinserver/joinServer';
import { name as createServer } from '../createserver/createServer';
import { serverlist } from '../../api/servers';

class ServerBrowerCtrl {
  constructor($scope) {
    $scope.viewModel(this);
    this.subscribe('servers');
    this.helpers({
      currentUser() {
        return Meteor.user();
      },
      servers(){
        const selector = {};
        console.log(this);
        return serverlist.find(selector, {});
      }
    });
    $scope.toSplash = function(){
      window.location = "/splash";
    }
    $scope.newServer = function(){
      window.location = "/create";
    }
  }
}

export default angular.module('serverBrowser', [
  angularMeteor,
  uiRouter
])
  .component('serverBrowser', {
  templateUrl: 'imports/components/serverbrowser/serverBrowser.html',
  controller: ['$scope', ServerBrowerCtrl]
})

.config(config);
function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('servers', {
      url: '/servers',
      template: '<server-browser></server-browser>'
    })
}
