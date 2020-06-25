import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DashboardPage from './Pages/DashboardPage';
import defTheme from './components/defTheme/defTheme';
import Register from './Pages/Register/Register';

const theme = createMuiTheme(defTheme);

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <MuiThemeProvider theme={theme}>
                        <Route path='/' exact component={DashboardPage}></Route>
                        <Route path='/register' component={Register}/>
                    </MuiThemeProvider>
                </div>
            </Router>
        );
    }
}

export default App;