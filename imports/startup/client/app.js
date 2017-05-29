import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Switch} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


import MainContainer from '/imports/ui/containers/MainContainer.jsx';

Meteor.startup(function(){
  injectTapEventPlugin();

  ReactDOM.render(
    <MuiThemeProvider>
      <MainContainer />
    </MuiThemeProvider>
    ,
    document.getElementById('render-target')
  );
});
