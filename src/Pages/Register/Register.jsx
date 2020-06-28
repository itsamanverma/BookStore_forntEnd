import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './Register.css';
import BookStoreIcon from '../../components/BookStoreIcon/BookStoreIcon';
import utility from "../../utility";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import UserService from "../../services/user_service";
import { FormGroup,FormControlLabel,Checkbox } from '@material-ui/core/';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

import {
    withRouter,
    Link
} from 'react-router-dom';


class Register extends Component {
        state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dob: '',
            region: [
              {
                value: 'IND',
                label: 'india',
              },
              {
                value: 'USD',
                label: 'United state',
              },
              {
                value: 'EUR',
                label: 'Europe',
              },
              {
                value: 'BTC',
                label: 'Britten',
              },
              {
                value: 'JPY',
                label: 'Japan',
              },
            ],
            showPassword: false,
            open: false,
            snakbarmsg: '',
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                dob: '',
                region: '',
                error: false
            }
        }

    register = () => {
        console.log('i am in register', this.state);
        this.props.loader(true);
        setTimeout(() => {
        this.props.loader(false);
            
        }, 2000);
        this.validate('firstName', this.state.firstName);
        this.validate('lastName', this.state.lastName)
        this.validate('email', this.state.email)
        this.validate('password', this.state.password)
        this.validate('dob', this.state.dob)
        this.validate('region', this.state.region)
        if (!this.state.errors.error) {
            console.log("api call");
            UserService.register(this.state).then((data) => {
                console.log("response from register", data);
                this.setState({ open: true, snakbarmsg: data.data.message })

                this.props.history.push('login')


            })
                .catch((error) => {
                    this.setState({ open: true, snakbarmsg: error.response.data.message })
                    console.log("error from register ", error.response.data.message);

                })
        }


    }
    setValue = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
        })
        this.validate(event.target.name, event.target.value)
    }
    validate(name, value) {
        let errors = this.state.errors;
        switch (name) {
            case 'firstName':
                if (value.length < 3) {
                    errors.firstName = 'First Name must be 3 characters long!';
                    errors.error = true;
                }
                else if (!utility.isStringValid(value)) {
                    errors.firstName = 'First name is invalid'
                    errors.error = true;

                } else {
                    errors.firstName = ''
                    errors.error = false;

                }
                break;
            case 'lastName':
                if (value.length < 3) {
                    errors.lastName = 'Last Name must be 3 characters long!';
                    errors.error = true;

                }
                else if (!utility.isStringValid(value)) {
                    errors.lastName = 'Last name is invalid'
                    errors.error = true;

                } else {
                    errors.lastName = ''
                    errors.error = false;

                }
                break;
            case 'email':
                console.log(utility.isEmailValid(value));

                if (!utility.isEmailValid(value)) {
                    errors.email = 'user Name  is invalid'
                    errors.error = true;

                } else {
                    errors.email = ''
                    errors.error = false;

                }
                break;
            case 'password':
                if (value.length < 5) {
                    errors.password = 'password must be 5 characters long!';
                    errors.error = true;

                }
                else {
                    errors.password = ''
                    errors.error = false;

                }
                break;
            case 'confirm':
                if (value.length < 5) {
                    errors.confirm = 'confirm password must be 5 characters long!';
                    errors.error = true;

                }
                else {
                    errors.confirm = ''
                    errors.error = false;

                }
                break;
            default:
                break;

        }
        this.setState({ errors, [name]: value }, () => {
        })
    }
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { errors, open } = this.state;
        return (
            <div className="register">
                <Snackbar open={open} message={this.state.snakbarmsg} autoHideDuration={3000} action={[
                    <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                        close
                    </Button>
                ]} />

                <Card className="card row">
                    <div className="cardI">
                        <BookStoreIcon className="paddingTopDown" login={this.register} />
                        <div className="paddingTopDown createTxt">Create Your Fundoo Account</div>
                        <div className="already">
                            <Link style={{textDecoration:'none'}} to="/login">
                                        <span>Already have an account?</span>
                                        <Button  className="signInButton">
                                            <span className="SignInButon-First">S</span>ign in 
                                        </Button>
                            </Link>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', width: '99%' }}>
                            <TextField
                                id="outlined-dense-multiline1"
                                label="UserName"
                                margin="dense"
                                error={errors.email.length > 0}
                                variant="outlined"
                                style={{ width: '99%' }}
                                name='email'
                                helperText={errors.email}
                                onChange={this.setValue}
                                autoComplete='off'

                            />
                            <span className='helpTxt'>You can use letters, numbers & periods</span>

                        </div>
                        <div className="twoTextField" >
                            <div className="column divField" >
                                <TextField
                                    id="outlined-dense-multiline2"
                                    label="FirstName"
                                    margin="dense"
                                    error={errors.firstName.length > 0}
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.setValue}
                                    variant="outlined"
                                    className='formField'
                                    autoComplete='off'
                                />
                                <span className='error'>{errors.firstName}</span>

                            </div>
                            <div className="column divField">
                                <TextField
                                    id="outlined-dense-multiline3"
                                    label="LastName"
                                    margin="dense"
                                    variant="outlined"
                                    className='formField'
                                    name="lastName"
                                    onChange={this.setValue}
                                    error={errors.lastName.length > 0}
                                    autoComplete='off'
                                />
                                <span className='error'>{errors.lastName}</span>

                            </div>
                        </div>
                        <form className="twoTextField" >
                            <div className="column divField password-div" >
                                <TextField
                                    id="outlined-dense-multiline4"
                                    label="Password"
                                    margin="dense"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    className='formField'
                                    error={errors.password.length > 0}
                                    name='password'
                                    onChange={this.setValue}
                                    autoComplete='off'
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">  <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton> </InputAdornment>,
                                    }}
                                />
                                <span className='error'>{errors.password}</span>

                            </div>
                        </form>
                            <div className="column divFeild datepicker">
                                <TextField 
                                    id="outlined-dense-multiline5"
                                    label="Date of Birth"
                                    margin="dense"
                                    type="date"
                                    variant='outlined'
                                    className='formField'
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    name='dob'
                                    onChange={this.setValue}
                                    autoComplete='off'
                                /> 
                                <span className='error'>{errors.dob}</span>
                            </div>
                            <form  noValidate autoComplete="off">
                              <div className="column country-div">
                                  <TextField
                                      className="country"
                                      id="outlined-dense-multiline6"
                                      select
                                      label="Country/Region"  
                                      placeholder='Country/Region'   
                                      value={this.state.region}  
                                      onChange={this.handlechange} 
                                      SelectProps={{
                                          native: true,
                                      }}
                                      helperText="Please select your Country/Region"
                                      variant="outlined"
                                      margin="dense"
                                      >
                                      {this.state.region.map((option) => (
                                          <option key={option.value} value={option.value}>
                                          {option.label}
                                          </option>
                                      ))}
                                  </TextField>
                              </div>
                        </form>
                        <div className="checkbox">
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                        name="checkedI"
                                    />
                                    }
                                    label="Please contact me via email"
                                />
                            </FormGroup>
                            <div className="termcondition">
                                <pre>By clicking Create account, I agree that I have read and accepted the <a href="/trems">Terms of Use</a> and <a href="/policy">Privacy Policy</a>.</pre>
                            </div>
                        </div>  
                        <div className="buttonHead ">
                            <Button variant="contained" onClick={this.register} className="RegisterButton">
                                Register
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}
export default withRouter(Register);