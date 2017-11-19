import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './splashScreen.html';
import uiRouter from 'angular-ui-router';
//import { Players } from '../../api/users.js';
import { name as serverBrowser } from '../serverbrowser/serverBrowser';
import { name as createServer } from '../createserver/createServer';
import { name as joinServer } from '../joinserver/joinServer';

class SplashScreenCtrl {
  constructor($scope) {
    $scope.viewModel(this);
    this.helpers({
      currentUser() {
        return Meteor.user();
      }
    });
    $scope.enterServerList = function(){
      window.location = "/servers";
    }
  }
}

export default angular.module('splashScreen', [
  angularMeteor,
  uiRouter
])
  .component('splashScreen', {
  templateUrl: 'imports/components/splashscreen/splashScreen.html',
  controller: ['$scope', SplashScreenCtrl]
})

.config(config);
function config($locationProvider, $urlRouterProvider){
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/splash');
}
