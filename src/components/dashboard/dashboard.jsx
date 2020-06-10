import React, { Component } from 'react';
import { AppBar } from '@material-ui/core'
import './dashboard.css';
import book from '../../assets/book.png'
import shoping from '../../assets/add_shopping.png'
class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-container'>
                <AppBar id='appbar'>
                    <div className='icon-search'>
                        <img className="book" src={book} alt="book_icon" />
                        <label className="Bookstore">BookStore</label>
                        <input id='search' type="text" placeholder='Search'/>
                    </div>
                    <div>
                        <img id="add-shoping" src={shoping} alt='add_shoping'/>
                    </div>
                </AppBar>

            </div>
        );
    }
}

export default Dashboard;