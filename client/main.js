import angular from 'angular';
import angularMeteor from 'angular-meteor';
import splashScreen from '../imports/components/splashscreen/splashScreen'
import '../imports/startup/accounts-config.js';

angular.module('simple-todos', [
  angularMeteor,
  splashScreen.name,
  'accounts.ui'
]);
