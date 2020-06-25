import React, {Component} from 'react';
import { TextField } from "@material-ui/core";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data: '',
            color:this.props.color
        }

        this.sendDataToParent = this.sendDataToParent.bind(this);
    }
    sendDataToParent = (event) => {
        this.setState({ data: event.target.value })
        this.props.onChange(event, event.target.value)
    }

    render() {
        return (
            <TextField 
                className='label'
                id="outlined-dense-multiline"
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                label={this.props.label}
                onChange={this.sendDataToParent}
                fullWidth
                color={this.state.color}
                required={this.props.required}
                autoComplete='off'
                variant={this.props.variant}
                helperText={this.props.helperText}
            />

        );
    }
}
