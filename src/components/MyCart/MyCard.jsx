import React, { Component } from 'react';

let cart=[{
    id: 1,
    name: "Don't Make me think",
    author: "Steve Krug",
    price: 1500,
    isAvailable: true,
    image: 'assets/dont_make_me_think',
    title: "Don't Make Me Think is a book by Steve Krug about human–computer interaction and web usability. The book's premise is that a good software program or web site should let users accomplish their intended tasks as easily and directly as possible. Krug points out that people are good at satisficing, or taking the first available solution to their problem, so design should take advantage of this.",
    noOfBooks: 2

},];

export default class MyCard extends Component {

    state={
        cart:cart,
    };

    render() {
        return (
            <div>
                <ul>
                </ul>
            </div>
        )
    }
}
