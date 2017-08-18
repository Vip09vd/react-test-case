import React, { Component, PropTypes } from 'react';

export default class Cell extends Component {

	static propTypes = {
		id: PropTypes.string,
        children: PropTypes.string,
        onHeaderCellClick: PropTypes.func
    };

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