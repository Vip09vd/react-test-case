import React, { Component, PropTypes } from 'react';
import Cell from "./Cell/index";

export default class Row extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<tr>
                 <Cell property={this.props.item.id}/>
                 <Cell property={this.props.item.name}/>
                 <Cell property={this.props.item.rating}/>
                 <Cell property={this.props.item.price}/>
            </tr>
		);
	}
}