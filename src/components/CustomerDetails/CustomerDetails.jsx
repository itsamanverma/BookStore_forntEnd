import React,{ Component } from "react";
import CustomerService from '../../services/customer_service';
import utility from '../../utility';
class CustomerDetails extends Component {

    state={
        Name: '',
        PhoneNo: '',
        Pincode: '',
        Locality: '',
        Address: '',
        city: '',
        Landmark: '',
        Type: '',
        showPassword: false,
        open: false,
        snakbarmsg: '',
        errors:{
            Name: '',
            PhoneNo: '',
            Pincode: '',
            Locality: '',
            Address: '',
            city: '',
            Landmark: '',
            Type: '',
        }
    }

    /** */
    customerDetails = () => {
        console.log('my details', this.state);
        this.props.loader(true);
        setTimeout(() => {
        this.props.loader(false);
            
        }, 2000);
        this.validate('Name', this.state.Name);
        this.validate('PhoneNo', this.state.PhoneNo)
        this.validate('Pincode', this.state.Pincode)
        this.validate('Locality', this.state.Locality)
        this.validate('Address', this.state.Address)
        this.validate('city', this.state.city)
        this.validate('Landmark', this.state.Landmark)
        if (!this.state.errors.error) {            
            console.log("api call");
            CustomerService.customer(this.state).then((data) => {
                console.log("response from customer", data);
                this.setState({ open: true, snakbarmsg: data.data.message })
                this.props.history.push('order')
            })
                .catch((error) => {
                    this.setState({ open: true, snakbarmsg: error.response.data.message })
                    console.log("error from customer ", error.response.data.message);

                })
        }
    }
    /** */
    setValue = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
        })
        this.validate(event.target.name, event.target.value)
    }

    /**
     * 
     */
    validate(name, value) {
        let errors = this.state.errors;
        switch (name) {
            case 'Name':
                if (value.length < 3) {
                    errors.Name = 'Name must be 3 characters long!';
                    errors.error = true;
                }
                else if (!utility.isStringValid(value)) {
                    errors.Name = 'Name is invalid'
                    errors.error = true;

                } else {
                    errors.Name = ''
                    errors.error = false;

                }
                break;
            case 'PhoneNo':
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
            case 'Pincode':
                console.log(utility.isEmailValid(value));

                if (!utility.isEmailValid(value)) {
                    errors.email = 'user Name  is invalid'
                    errors.error = true;

                } else {
                    errors.email = ''
                    errors.error = false;

                }
                break;
            case 'Locality':
                if (value.length < 5) {
                    errors.password = 'password must be 5 characters long!';
                    errors.error = true;

                }
                else {
                    errors.password = ''
                    errors.error = false;

                }
                break;
            case 'Address':
                if (value.length < 5) {
                    errors.password = 'password must be 5 characters long!';
                    errors.error = true;

                }
                else {
                    errors.password = ''
                    errors.error = false;

                }
                break;
            case 'city':
                if (value.length < 5) {
                    errors.password = 'password must be 5 characters long!';
                    errors.error = true;

                }
                else {
                    errors.password = ''
                    errors.error = false;

                }
                break;
            case 'Landmark':
                if (value.length < 5) {
                    errors.password = 'password must be 5 characters long!';
                    errors.error = true;

                }
                else {
                    errors.password = ''
                    errors.error = false;

                }
                break;
             default:
                break;

        }
        this.setState({ errors, [name]: value }, () => {
        })
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CustomerDetails;