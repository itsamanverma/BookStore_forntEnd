import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

let regions = [
  {
    value: 'IND',
    label: 'india',
  },
  {
    value: 'USD',
    label: 'United State',
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
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '64ch',
    },
  },
}));


export default function Country() {

    const classes = useStyles();
    const [ setRegion ] = React.useState('EUR');

    const handleChange = (event) => {
        setRegion(event.target.value);
      };

      return (
        <form className={classes.root} noValidate autoComplete="off">
            <div className="column country-div">
                <TextField
                    id="outlined-dense-multiline6"
                    select
                    label="Country/Region"  
                    placeholder='Country/Region'   
                    value={regions}  
                    onChange={handleChange} 
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your Country/Region"
                    variant="outlined"
                    margin="dense"
                    >
                    {regions.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
            </div>
        </form>
        );
}   




