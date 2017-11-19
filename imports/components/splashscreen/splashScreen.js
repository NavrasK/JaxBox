import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './splashScreen.html';
import uiRouter from 'angular-ui-router';

class SplashScreenCtrl {
  constructor($scope) {
    $scope.viewModel(this);
    this.helpers({
      currentUser() {
        return Meteor.user();
      }
    });
    $scope.enterServerList = function(){
      window.location = "#/serverBrowser.html";
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
});
