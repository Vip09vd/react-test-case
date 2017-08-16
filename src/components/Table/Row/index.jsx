import React, { Component, PropTypes } from 'react';
import Cell from "./Cell/index";

export default class Row extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<tr>
                <Cell/>
            </tr>
		);
	}
}