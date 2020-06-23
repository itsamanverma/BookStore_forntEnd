import React, { Component } from 'react';
import { AppBar } from '@material-ui/core'
import './dashboard.css';
import book from '../../assets/open.svg'
import shoping from '../../assets/shopping-cart-icon-shopping-cart-icon-by_vexels.png'
import { withRouter } from 'react-router-dom'
class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    _handleSeachBook = (event) => {
        this.props.searchBook(event.target.value);
    }

    render() {
        return (
            <div className='dashboard-container'>
                <AppBar id='appbar'>
                    <div className='icon-search'>
                        <img className="book" src={book} alt="book_icon" />
                        <label className="Bookstore">BookStore</label>
                        <input id='search' type="text" placeholder='Search here...' onChange={this._handleSeachBook.bind(this)} />
                        <label className="Cart">Cart</label>
                    </div>
                    <div>
                        <img id="add-shoping" src={shoping} alt='add_shoping' />
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(Dashboard);