import React, { Component, PropTypes } from 'react';
import Cell from "./Cell/index";

export default class Row extends Component {

	render() {
		return (
			<tr>
				{this.props.columns.map((column) => <Cell key={column.property}>
                    {column.transform
                        ? <column.transform value={this.props.item[column.property]}/>
                        : this.props.item[column.property]}
                    </Cell>)}
            </tr>
		);
	}
}