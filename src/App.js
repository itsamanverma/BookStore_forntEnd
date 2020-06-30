import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DashboardPage from './Pages/DashboardPage';
import defTheme from './components/defTheme/defTheme';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Forget from './Pages/Forgot/Forgot';
import Button from '@material-ui/core/Button';
import LoadingOverlay from 'react-loading-overlay';
import './App.scss';
import Snackbar from '@material-ui/core/Snackbar';

const theme = createMuiTheme(defTheme);

function App()  {

    const [loader, setLoader] = React.useState(false);
    const [snackbar, snackbarValue] = React.useState({
      isOpen: false,
      snakbarmsg: ''
    });
  
  
    const toggleLoader = (value) => {
      if (value === true || value === false)
        setLoader(value);
    }
    const toggleSnackbar = (isOpen, msg) => {
      snackbarValue(preState => {
        return { isOpen: isOpen, snakbarmsg: msg }
      })
      if(isOpen){
        setTimeout(() => {
          toggleSnackbar(false,'')
        }, 4000);
      }
    }      
        return (
            <div className="App">
                <Snackbar open={snackbar.isOpen} message={snackbar.snakbarmsg} autoHideDuration={3000} action={[
                    <Button key="undo" color="secondary" size="small" onClick={() => snackbarValue({ isOpen: false, snakbarmsg: '' })}>
                    close
                    </Button>

                ]} />
                <LoadingOverlay
                    active={loader}
                    spinner
                    styles={{backgroundColor:'black'}}
                >
                    <Router>
                        <MuiThemeProvider theme={theme}>
                            <Switch>
                                <Route path='/' exact component={DashboardPage}></Route>
                                <Route path='/register'>
                                    <Register snackbar={toggleSnackbar} loader={toggleLoader} />
                                </Route>
                                <Route path="/login">
                                    <Login snackbar={toggleSnackbar} loader={toggleLoader} />
                                </Route>
                                <Route path="/forgot">
                                     <Forget snackbar={toggleSnackbar} loader={toggleLoader} />
                                </Route>
                            </Switch>  
                        </MuiThemeProvider>
                    </Router>
                </LoadingOverlay>
            </div>
        );
}

export default App;