import angular from 'angular';
import angularMeteor from 'angular-meteor';
import splashScreen from '../imports/components/splashscreen/splashScreen';
import serverBrowser from '../imports/components/serverbrowser/serverBrowser';
import joinServer from '../imports/components/joinserver/joinServer';
import createServer from '../imports/components/createserver/createServer';
import uiRouter from 'angular-ui-router';
import '../imports/startup/accounts-config.js';
//import '../../api/servers';
//import '../../api/users';

angular.module('jax-games', [
  angularMeteor,
  splashScreen.name,
  serverBrowser.name,
  createServer.name,
  //joinServer.name,
  uiRouter,
  'accounts.ui'
]);
