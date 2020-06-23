/**
 * @description: This page is used as we have multiple component to show in one dashboard.
 */
import React, { Component } from 'react';
import Dashboard from "../components/dashboard/dashboard";
import Books from "../components/AllBooks/books";

export class DashboardPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchBook: ""
        }
    }

    _handleSearchProps = (value) => {
        this.setState({
            searchBook: value
        })
    }

    render() {
        const { searchBook } = this.state;
        return (
            <div>
                <Dashboard searchBook={this._handleSearchProps} />
                <Books searchBook={searchBook} />
            </div>
        )
    }
}

export default DashboardPage
