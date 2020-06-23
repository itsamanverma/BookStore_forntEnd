import React, { Component } from 'react';
import { Card, Select, MenuItem, MuiThemeProvider, createMuiTheme, Button, Tooltip } from '@material-ui/core';
import './books.css';


//inplace of backend data used this array.
let booksArray = [{
    name: "Don't Make me think",
    author: "Steve Krug",
    price: 1500,
    isAvailable: true,
    image: 'assets/dont_make_me_think'
},
{
    name: "The Help",
    author: "‎Kathryn Stockett",
    price: 1200,
    isAvailable: true,
    image: 'assets/the_help'
},
{
    name: "The Perception",
    author: "Ashwini Pacharey",
    price: 2000,
    isAvailable: false,
    image: 'assets/the_perception'
},
{
    name: "Attitude is Everything",
    author: "Rhonda Byrne",
    price: 4000,
    isAvailable: true,
    image: `assets/attitude_is_everything`
},
{
    name: "The Help",
    author: "‎Kathryn Stockett",
    price: 1200,
    isAvailable: true,
    image: 'assets/the_help'
},
{
    name: "The Perception",
    author: "Ashwini Pacharey",
    price: 2000,
    isAvailable: false,
    image: 'assets/the_perception'
},
{
    name: "Attitude is Everything",
    author: "Rhonda Byrne",
    price: 4000,
    isAvailable: true,
    image: `assets/attitude_is_everything`
},
]

//theme ovverides for respective component.
const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            root: {
                height: "30px",
                width: "21%"
            }
        },
        MuiCard: {
            root: {
                overflow: "hidden",
                width: "22%",
                margin: "17px 17px",
                height: "24rem"
            }
        },
        MuiButton: {
            text: {
                padding: "4px 8px"
            }
        },
        MuiPaper: {
            elevation1: {
                boxShadow: "2px 3px 14px lightgrey"
            }
        },
        MuiTooltip: {
            // .MuiTooltip-tooltip
            tooltip :{
                fontSize: "14px",
                backgroundColor:"#f0f0f1",
                color:"black",
                zIndex:"9999"
            }
        }
    }
})

{/**  function written outside as this needs to render at once.
if it is inside render or inside class it will render again and again will consume more memory.*/}

function searchingFor(search) {
    return function (x) {
        return x.name.includes(search) || x.author.includes(search)
    }
}

export class Books extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filter: "",
            booksArray: booksArray,
        }
    }

    _handleSelectFilter = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    // Always use function outside and call it in render to avoid more memory consumption.
    _getAllBookInfo = () => {
        return this.state.booksArray.filter(searchingFor(this.props.searchBook)).map((key, index) => {
            return (
                <MuiThemeProvider theme={theme}>
                    <Card key={key.name} >
                    <Tooltip title="ਪੰਜਾਬੀ ( ਜਿਸ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ Punjabi, ਗੁਰਮੁਖੀ ਵਿੱਚ ਪੰਜਾਬੀ ਅਤੇ, ਸ਼ਾਹਮੁਖੀ ਵਿੱਚ پنجابی ਵਾਂਗ ਲਿਖਿਆ ਜਾਦਾ ਹੈ।)
                     ਭਾਰਤ ਅਤੇ ਪਾਕਿਸਤਾਨ ਦੇ ਪੰਜਾਬ ਸੂਬੇ ਦੀ ਭਾਸ਼ਾ ਹੈ। ਇਹ ਭਾਰਤੀ-ਇਰਾਨੀ ਵਰਗ ਦੇ ਵਿੱਚੋਂ ਭਾਰਤੀ-ਯੂਰਪ ਵਰਗ ਨਾਲ ਸਬੰਧਤ ਹੈ।
                     ਇਸ ਤੋਂ ਇਲਾਵਾ ਪੰਜਾਬੀ ਸ਼ਬਦ ਨੂੰ ਪੰਜਾਬ ਨਾਲ ਸਬੰਧਤ ਕਿਸੇ ਵੀ ਚੀਜ਼ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਜੋ ਕਿ ਪੰਜਾਬ ਜਾਂ ਪੰਜਾਬੀ ਨਾਲ ਸਬੰਧਤ ਹੋਵੇ,
                     ਜਿਵੇਂ ਕਿ ਪੰਜਾਬੀ ਬੋਲਣ ਵਾਲਿਆਂ ਨੂੰ ਪੰਜਾਬੀ ਅਤੇ ਪੰਜਾਬੀ ਖੇਤਰ ਵਿੱਚ ਪੰਜਾਬੀ ਹੀ ਕਿਹਾ ਜਾਦਾ ਹੈ।" placement="top-start"> 
                     <div className="image-c">
                         <img src={require(`../../${key.image}.jpg`)} alt="book" className="image-dimention"></img>
                     {!key.isAvailable && <span className="book-avaialability">OUT OF STOCK</span>}
                     </div>
                     </Tooltip>
                        <div className="book-info">
                            <div className="book-name">{key.name}</div>
                            <div className="author">By {key.author}</div>
                            <div className="price">Rs {key.price}</div>
                            <div className="add-button">
                                {key.isAvailable && <Button style={{ color: "white", background: "maroon", fontSize: "12px", borderRadius: "3px", width: "46%" }}>ADD TO BAG</Button>}
                                <Button style={{ color: "black", border: "0.5px solid #aaa9ad", borderRadius: "3px", fontSize: "12px", padding: "4.5px 17px" }} className={!key.isAvailable && "fullwidth"}>WISHLIST</Button>
                            </div>
                        </div>
                    </Card>
                </MuiThemeProvider>
            );
        })
    }

    render() {
        const { filter, booksArray } = this.state;
        return (
            <div className="books-header">
                <div className="title-row">
                    <div className="main-containt-title">
                        Books <span className="item-lenght">({booksArray.length} item) </span>
                    </div>
                    <MuiThemeProvider theme={theme}>
                        <Select
                            value={filter}
                            defaultValue="Newly Arrived"
                            onChange={this._handleSelectFilter}
                            variant="outlined"
                            style={{ fontSize: "15px", color: "darkslategray" }}
                        >
                            <MenuItem value="Newly Arrived">Newly Arrived</MenuItem>
                            <MenuItem value="Price : Low to High">Price : Low to High</MenuItem>
                            <MenuItem value="Price : High to Low">Price : High to Low</MenuItem>
                        </Select>
                    </MuiThemeProvider>
                </div>
                <div className="all-cards">{this._getAllBookInfo()}</div>
            </div>
        )
    }
}

export default Books
