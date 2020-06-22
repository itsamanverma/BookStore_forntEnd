import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import DashboardPage from './Pages/DashboardPage';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={DashboardPage}/>
                </Switch>
            </Router>
            
        );
    }
}

export default App;