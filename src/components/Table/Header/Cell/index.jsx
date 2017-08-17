import React, { Component, PropTypes } from 'react';

export default class Cell extends Component {

    handleClick = () => {
      this.props.onHeaderCellClick(this.props.id);
    };

	render() {
		return (
			<th onClick={this.handleClick}>
                {this.props.children}
            </th>
		);
	}
}