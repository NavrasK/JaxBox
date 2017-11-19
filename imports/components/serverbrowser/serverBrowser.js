import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './splashScreen.html';

class SplashScreenCtrl {
  constructor($scope) {
    $scope.viewModel(this);
    this.helpers({
      currentUser() {
        return Meteor.user();
      }
    });
  }
}

export default angular.module('splashScreen', [
  angularMeteor
])
  .component('splashScreen', {
  templateUrl: 'imports/components/splashscreen/splashScreen.html',
  controller: ['$scope', SplashScreenCtrl]
});
