import React from 'react';
import CustomerDetails from '../../components/CustomerDetails/CustomerDetails';
import MyCard from '../../components/MyCart/MyCard';
/**
 * @description this page for shopping books
 */
class ShoppingBooks extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div>
                <CustomerDetails />
                <MyCard />
            </div>
        );
    }
}

export default ShoppingBooks;