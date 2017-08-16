import React, { Component, PropTypes } from 'react';

export default class Cell extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<td>
				{this.props.property}
            </td>
		);
	}
}