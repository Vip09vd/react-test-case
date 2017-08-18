import React, { Component, PropTypes } from 'react';

export default class Cell extends Component {

	static propTypes = {
		children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
	};

	render() {
		return (
			<td>
				{this.props.children}
            </td>
		);
	}
}