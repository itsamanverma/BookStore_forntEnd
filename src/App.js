import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DashboardPage from './Pages/DashboardPage';
import Register from './pages/Register/Register';
import defTheme from './components/defTheme/defTheme';

const theme = createMuiTheme(defTheme);

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <MuiThemeProvider theme={theme}>
                    <Route path='/' component={DashboardPage}/>
                    <Route path='/register' component={Register}/>
                </MuiThemeProvider>
                </div>
            </Router>
        );
    }
}

export default App;