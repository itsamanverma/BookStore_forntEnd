import React, { Component } from 'react';
import { Card, Select, MenuItem, MuiThemeProvider, createMuiTheme, Button, Tooltip } from '@material-ui/core';
import './books.css';


//inplace of backend data used this array.
let booksArray = [{
    id: 1,
    name: "Don't Make me think",
    author: "Steve Krug",
    price: 1500,
    isAvailable: true,
    image: 'assets/dont_make_me_think',
    title: "Don't Make Me Think is a book by Steve Krug about human–computer interaction and web usability. The book's premise is that a good software program or web site should let users accomplish their intended tasks as easily and directly as possible. Krug points out that people are good at satisficing, or taking the first available solution to their problem, so design should take advantage of this. "
},
{
    id: 2,
    name: "The Help",
    author: "‎Kathryn Stockett",
    price: 1200,
    isAvailable: true,
    image: 'assets/the_help',
    title: "The Help is a 2009 novel by American author Kathryn Stockett.The story is about African Americans working in white households in Jackson, Mississippi, during the early 1960s. A USA Today article called it one of the 'summer sleeper hits'"
},
{
    id: 3,
    name: "The Perception",
    author: "Aman Verma",
    price: 2000,
    isAvailable: false,
    image: 'assets/the_perception',
    title: 'perception, in psychology, mental organization and interpretation of sensory information. The Gestalt psychologists studied extensively the ways in which people organize and select from the vast array of stimuli that are presented to them'
},
{
    id: 4,
    name: "Attitude is Everything",
    author: "Rhonda Byrne",
    price: 4000,
    isAvailable: true,
    image: `assets/attitude_is_everything`,
    title: "Attitude is Everything is a book based on Jeff Keller's journey of being a motivational speaker. ... He decides to make a gradual transition and start working as a full-time motivational orator in 1992. This novel is divided into three parts, Success Begins in the Mind, Watch Your Words, and Heaven Helps Those Who Act"

},
{
    id: 5,
    name: "The Help",
    author: "‎Kathryn Stockett",
    price: 1200,
    isAvailable: true,
    image: 'assets/the_help',
    title: "The Help is a 2009 novel by American author Kathryn Stockett.The story is about African Americans working in white households in Jackson, Mississippi, during the early 1960s. A USA Today article called it one of the 'summer sleeper hits'"
},
{
    id: 6,
    name: "The Perception",
    author: "Aman Verma",
    price: 2000,
    isAvailable: false,
    image: 'assets/the_perception',
    title: 'perception, in psychology, mental organization and interpretation of sensory information. The Gestalt psychologists studied extensively the ways in which people organize and select from the vast array of stimuli that are presented to them'

},
{
    id: 7,
    name: "Attitude is Everything",
    author: "Rhonda Byrne",
    price: 4000,
    isAvailable: true,  
    image: `assets/attitude_is_everything`,
    title: "Attitude is Everything is a book based on Jeff Keller's journey of being a motivational speaker. ... He decides to make a gradual transition and start working as a full-time motivational orator in 1992. This novel is divided into three parts, Success Begins in the Mind, Watch Your Words, and Heaven Helps Those Who Act"
},
{
    id: 8,
    name: "The Road to React",
    author: "Robin Wieruch",
    price: 1308,
    isAvailable: true,
    image: `assets/The_Road_to_React`,
    title: 'In "The Road to React" you will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step. While you create the React application, every chapter will introduce you to a new React key feature.'
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
        // .MuiTooltip-tooltip
        tooltip :{
            fontSize: "14px",
                    MuiTooltip: {
                backgroundColor:"#f0f0f1",
                color:"black",
                zIndex:"9999"
            }
        }
    }
})

/**  function written outside as this needs to render at once.
if it is inside render or inside class it will render again and again will consume more memory.*/

function searchingFor(search) {
    return function (x) {
        return x.name.includes(search) || x.author.includes(search)
    }
}

export class Books extends Component {
    constructor(props) {
        super(props)
        this.wrapper = React.createRef();
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
                <MuiThemeProvider theme={theme} ref={this.wrapper}>
                    <Card key={key.name}>
                    <Tooltip title={key.title} placement="top-start" label='Book Detail' > 
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
                        Books <span className="item-lenght">({booksArray.length} items) </span>
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

export default Books;
