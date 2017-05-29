//Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import AppNavigation from '../components/AppNavigation.jsx';
import Index from '../pages/Index.jsx';
import NotFound from '/imports/ui/NotFound.jsx';

export default class MainContainer extends Component {

  render() {
    return(

      <Router>
        <div>

          <AppNavigation/>

          <Switch>
            <Route exact path="/" component={Index}/>

            <Route component={NotFound}/>
          </Switch>

        </div>
      </Router>



    )
  }
}
