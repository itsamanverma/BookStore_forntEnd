import React,{ Component } from "react";
import CustomerService from '../../services/customer_service';
import utility from '../../utility';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import './CustomerDetails.css';
import TextField from '@material-ui/core/TextField';

class CustomerDetails extends Component {

    constructor(props) {
        super(props);

        this.state={
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
            }
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

    handleClose = () => {
        this.setState({ open: false });
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
                if (value.length < 10 ) {
                    errors.PhoneNo = 'PhoneNo must be 10 digit long!';
                    errors.error = true;

                }
                else if (!utility.isPhoneNoValid(value)) {
                    errors.PhoneNo = 'phone No is invalid'
                    errors.error = true;

                } else {
                    errors.PhoneNo = ''
                    errors.error = false;

                }
                break;
            case 'Pincode':
                if (value.length < 6 ) {
                    errors.Pincode = 'Pincode must be 6 digit long!';
                    errors.error = true;

                }
                else if (!utility.isPincodeValid(value)) {
                    errors.Pincode = 'Pincode is invalid'
                    errors.error = true;

                } else {
                    errors.Pincode = ''
                    errors.error = false;

                }
                break;
            case 'Locality':
                if (value.length < 3) {
                    errors.Locality = 'Locality must be 3 characters long!';
                    errors.error = true;
                }
                else if (!utility.isStringValid(value)) {
                    errors.Locality = 'Locality is invalid'
                    errors.error = true;

                } else {
                    errors.Locality = ''
                    errors.error = false;

                }
                break;            
            case 'Address':
                if (value.length < 15) {
                    errors.Address = 'Address must be 3 characters long!';
                    errors.error = true;
                }
                else if (!utility.isAddressValid(value)) {
                    errors.Address = 'Address is invalid'
                    errors.error = true;

                } else {
                    errors.Address = ''
                    errors.error = false;
                }
                break;
            case 'city':
                if (value.length < 3) {
                    errors.city = 'city must be 3 characters long!';
                    errors.error = true;
                }
                else if (!utility.isStringValid(value)) {
                    errors.city = 'city is invalid'
                    errors.error = true;

                } else {
                    errors.city = ''
                    errors.error = false;
                }
                break;
            case 'Landmark':
                if (value.length < 3) {
                    errors.Landmark = 'Landmark must be 3 characters long!';
                    errors.error = true;
                }
                else if (!utility.isStringValid(value)) {
                    errors.Landmark = 'Landmark is invalid'
                    errors.error = true;

                } else {
                    errors.Landmark = ''
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
        const { errors, open } = this.state;
        return (
            <div className="customerDetail">
                <Snackbar open={open} message={this.state.snakbarmsg} autoHideDuration={3000} action={[
                    <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                        close
                    </Button>
                ]} />

                <Card className="card row">
                    <div className="CardI">
                                <div className="Editdiv">
                                    <div className="paddingTopDown createTxt">Customer Details</div>
                                    <span className="Edit"><a href="\Edit">Edit</a></span>
                                </div>
                            <div className="twoTextField" >
                                <div className="column divField" >
                                    <TextField
                                        id="outlined-dense-multiline2"
                                        label="Name"
                                        margin="dense"
                                        error={errors.Name.length > 0}
                                        name="Name"
                                        value={this.state.Name}
                                        onChange={this.setValue}
                                        variant="outlined"
                                        className='formField'
                                        autoComplete='off'
                                    />
                                    <span className='error'>{errors.Name}</span>
                                </div>
                                <div className="column divField">
                                    <TextField
                                        id="outlined-dense-multiline3"
                                        label="PhoneNo"
                                        type="text"
                                        margin="dense"
                                        variant="outlined"
                                        className='formField'
                                        name="PhoneNo"
                                        onChange={this.setValue}
                                        error={errors.PhoneNo.length }
                                        autoComplete='off'
                                    />
                                    <span className='error'>{errors.PhoneNo}</span>
                                </div>
                            </div>
                            <div className="twoTextField" >
                                <div className="column divField" >
                                    <TextField
                                        id="outlined-dense-multiline3"
                                        label="Pincode"
                                        margin="dense"
                                        error={errors.Pincode.length >6}
                                        name="Pincode"
                                        value={this.state.Pincode}
                                        onChange={this.setValue}
                                        variant="outlined"
                                        className='formField'
                                        autoComplete='off'
                                    />
                                    <span className='error'>{errors.Pincode}</span>
                                </div>
                                <div className="column divField">
                                    <TextField
                                        id="outlined-dense-multiline4"
                                        label="Locality"
                                        margin="dense"
                                        variant="outlined"
                                        className='formField'
                                        name="Locality"
                                        onChange={this.setValue}
                                        error={errors.Locality.length > 0}
                                        autoComplete='off'
                                    />
                                    <span className='error'>{errors.Locality}</span>
                                </div>
                            </div>
                            <div className="twoTextField" >
                                <div className="column divFieldAddress" >
                                    <TextField
                                        id="outlined-dense-multiline5"
                                        label="Address"
                                        margin="dense"
                                        error={errors.Address.length > 90}
                                        name="Address"
                                        value={this.state.Address}
                                        onChange={this.setValue}
                                        variant="outlined"
                                        className='formField'
                                        autoComplete='off'
                                    />
                                    <span className='error'>{errors.Address}</span>
                                </div>
                            </div>
                            <div className="twoTextField" >
                                <div className="column divField" >
                                    <TextField
                                        id="outlined-dense-multiline6"
                                        label="city/Town"
                                        margin="dense"
                                        error={errors.city.length > 0}
                                        name="Pincode"
                                        value={this.state.city}
                                        onChange={this.setValue}
                                        variant="outlined"
                                        className='formField'
                                        autoComplete='off'
                                    />
                                    <span className='error'>{errors.city}</span>
                                </div>
                                <div className="column divField">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                                    <TextField
                                        id="outlined-dense-multiline7"
                                        label="Landmark"
                                        margin="dense"
                                        variant="outlined"
                                        className='formField'
                                        name="Landmark"
                                        onChange={this.setValue}
                                        error={errors.Landmark.length >0}
                                        autoComplete='off'
                                    />
                                    <span className='error'>{errors.Landmark}</span>
                                </div>
                            </div>
                            <div className="twoTextFeild">
                                <div>Type</div>
                            </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default CustomerDetails;