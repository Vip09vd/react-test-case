import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Rating</th>
                    <th>Price</th>
                </tr>
            </thead>
        );
    }
}