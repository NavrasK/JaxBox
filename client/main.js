import angular from 'angular';
import angularMeteor from 'angular-meteor';
import splashScreen from '../imports/components/splashscreen/splashScreen'
import serverBrowser from '../imports/components/serverbrowser/serverBrowser'
//import joinServer from '../imports/components/serverbrowser/joinserver/joinServer';
//import createServer from '../imports/components/serverbrowser/createserver/createServer';
import uiRouter from 'angular-ui-router';
import '../imports/startup/accounts-config.js';

angular.module('simple-todos', [
  angularMeteor,
  splashScreen.name,
  serverBrowser.name,
  //joinServer.name,
  //createServer.name,
  uiRouter,
  'accounts.ui'
]);
