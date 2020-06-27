import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import utility from '../../utility';
import { Card, Button, CardContent, FormGroup,FormControlLabel,Checkbox } from '@material-ui/core/';
import UserService from '../../services/UserService';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import '../Register/Register.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import {
    withRouter,
    Link
} from 'react-router-dom'
import BookStoreIcon from '../../components/BookStoreIcon/BookStoreIcon';
import Country from '../../components/Country/Country';

var userService = new UserService();

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      dob: '',
      region: '',
      isValidated: false,
      showPassword: false,
      error: {},
    }
    this.getDataFromInput = this.getDataFromInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validate = this.validate.bind(this);
  }

   /**
   * function to get data from the object
   * 
   * @param {var} data 
   */
  getDataFromInput(event,data) {
    // console.log('register', data);
    this.setState({
      [event.target.name]: data
    })
  }

  /**
   * function to handle the input validations of the page
   * 
   * @param {event} event 
   */
  validate(event) {
    var error = {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      dob: '',
      region:'',
    };
    var valid = false;
    // if(event.target.name==='firstname'){
        if (this.state.firstname.length < 3) {
            error.firstname = 'First Name must be 3 characters long!'
            valid = true;
          }
        else if (!utility.isStringValid(this.state.firstname)) {
        error.firstname = 'First name is invalid'
        valid = true;
        }
        else{
            error.firstname=''
            valid = false;  
        }
        //  }
        // else if(event.target.name==='lastname'){
        if (this.state.lastname.length < 3) {
        error.lastname = 'Last Name must be 3 characters long!'
        valid = true;
        }
        else if (!utility.isStringValid(this.state.lastname)) {
        error.lastname = 'Last Name is Invalid'
        valid = true;
        }
        else {
            error.lastname=''
            valid = false;
        }
        // else if(event.target.name==='email'){
        console.log(utility.isEmailValid(this.state.email));

        if (!utility.isEmailValid(this.state.email)) {
            error.email = 'user Name  is invalid'
            valid = true;

        } else {
            error.email = ''
            valid = false;

        }
        //}
        //else if(event.target.name==='password'){
        if (this.state.password.length < 5) {
            error.password = 'Password cannot be empty'
            valid = false;
        }
        else {
            error.password = ''
            valid = false;

        }
        //}
        this.setState({
            error: error,
            isValidated: valid,
        })
        return valid;
    }

  setcolor(event) {
    event.target.color = 'error';
  }
  unsetcolor(event) {
    event.target.color = 'error';
  }

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

   /**
   * function to handle click of the button of login
   * 
   * @param {event} event 
   */
  handleClick() {

    if (this.validate()) {
      const data = {
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        password: this.state.password,
        dob:this.state.dob,
        region:this.state.region
      }
      userService.register(data).then(res => {
        if (res.status === 210) {
          this.setState({
            error: {
              email: res.data.error.email[0],   
            }
          });
        }
        else if (res.status === 201) {
          alert('Registration Successfull')
        }

      }).catch();
    }
  }

  render() {
    //console.log("email", this.state.email);
    return (
      <div className="register">
        <Card className="card row">
          <CardContent>
            <div className="cardI">
                <BookStoreIcon className="paddingTopDown" login={this.register} />
                <div className="paddingTopDown createTxt">Create Your BookStore Account</div>
                <div className="already">
                    <Link style={{textDecoration:'none'}} to="/login">
                                <span>Already have an account?</span>
                                <Button  className="signInButton">
                                    <span className="SignInButon-First">S</span>ign in 
                                </Button>
                    </Link>
                </div>
              <div className='form'>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', width: '100%' }}>
                    <Input 
                        id={'outlined-dense-multiline1'}
                        name={'email'} 
                        type={'Email'} 
                        margin={'dense'}
                        style={{ width: '99%' }} 
                        placeholder={'Enter Your Email'} 
                        label={'Email address'} 
                        onChange={this.getDataFromInput} 
                        required={true} 
                        autoComplete='off' 
                    />
                    <span className='helpTxt'>You can use letters, numbers & periods</span>
                    <span className='error'>{this.state.error.email}</span>
                </div>
                <div className="twoTextField" >
                    <div className="column divField">
                        <Input 
                            id={'outlined-dense-multiline2'}
                            name={'firstname'} 
                            type={'text'} 
                            margin={'dense'}
                            placeholder={'Enter First Name'} 
                            label={'First name'} 
                            onChange={this.getDataFromInput} 
                            variant={'outlined'} 
                            autoComplete='off'
                        />
                        <span className='error'>{this.state.error.firstname}</span>
                    </div>
                    <div className="column divField">
                        <Input 
                            id={'outlined-dense-multiline3'}
                            name={'lastname'} 
                            type={'text'} 
                            margin={'dense'}
                            placeholder={'Enter Last Name'} 
                            label={'Last Name'} 
                            onChange={this.getDataFromInput} 
                            variant={'outlined'} 
                            autoComplete='off' />
                        <span className='error'>{this.state.error.lastname}</span>
                    </div>
                </div>
                <form className="twoTextField" >
                            <div className="column divField-p" >
                                <TextField
                                    id="outlined-dense-multiline4"
                                    label="Password"
                                    margin="dense"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    className='formField'
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
                                <span className='error'>{this.state.error.password}</span>
                            </div>
                        </form>
                <div className="column divField-p">
                  <Input 
                    id={'outlined-dense-multiline5'}
                    name={'dob'} 
                    type={'date'} 
                    margin={'dense'}
                    placeholder={'Date of Birth'} 
                    label={'Date of Birth'} 
                    onChange={this.getDataFromInput} 
                    variant={'outlined'} 
                    autoComplete='off' />
                  <span className='error'>{this.state.error.dob}</span>
                </div>
                <div>
                    <Country />
                </div>
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
                                Create account
                        </Button>
                    </div>
                </div>
            </div>    
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(Register);