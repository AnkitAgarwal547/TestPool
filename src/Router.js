import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';

class Router extends Component {
    render() {
        return(
        <BrowserRouter basename="/TestPool">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>

        )
    }
}
export default Router;