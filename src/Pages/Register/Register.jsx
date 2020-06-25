import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import utility from '../../utility';
import { Card, Typography, Button, CardContent } from '@material-ui/core/';
import UserService from '../../services/UserService';
import '../Register/Register.css';

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
      region:''
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
              <Typography variant="h5" component="h2" className='login' color='primary' id='card-heading' >
                Register
              </Typography>
              <div className="paddingTopDown createTxt">Create Your BookStore Account</div>

              <div className='form'>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', width: '100%' }}>
                    <Input name={'email'} type={'Email'} style={{ width: '99%' }} placeholder={'Enter Your Email'} label={'Email'} onChange={this.getDataFromInput} required={true} autoComplete='off' />
                    <div className='error'>{this.state.error.email}</div>
                </div>
                <div className="twoTextField" >
                    <div className="column divField">
                    <Input name={'firstname'} type={'text'} placeholder={'Enter First Name'} label={'First name'} onChange={this.getDataFromInput} variant={'outlined'} autoComplete='off'/>
                    <div className='error'>{this.state.error.firstname}</div>
                    </div>
                    <div className="column divField">
                    <Input name={'lastname'} type={'text'} placeholder={'Enter Last Name'} label={'Last Name'} onChange={this.getDataFromInput} variant={'outlined'} autoComplete='off' />
                    <div className='error'>{this.state.error.lastname}</div>
                    </div>
                </div>
                <div>
                  <Input name={'password'} type={'password'} placeholder={'Enter Password'} label={'PassWord'} onChange={this.getDataFromInput} variant={'outlined'} autoComplete='off' 
                  />
                  <div className='error'>{this.state.error.password}</div>
                </div>
                <div>
                  <Input name={'dob'} type={'date'} placeholder={'date of birth'} label={''} onChange={this.getDataFromInput} variant={'outlined'} autoComplete='off' />
                  <div className='error'>{this.state.error.dob}</div>
                </div>
                <div id='register-btn-div'>
                  <Button onClick={this.handleClick} className='register-btn' variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </div>
                <span><Typography id='reg-text-login'>Already have an account <a href="/login">Login</a></Typography></span>
              </div>
            </div>
            
            
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Register;