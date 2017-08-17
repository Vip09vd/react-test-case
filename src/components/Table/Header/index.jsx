import React, {Component} from 'react';
import Cell from "./Cell/index";

export default class Header extends Component {

    handleCellClick = (property) => {
        this.props.onHeaderCellClick(property)
    };

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map((column) => <Cell onHeaderCellClick={this.handleCellClick} id={column.property} key={column.property}>{column.name}</Cell>)}
                </tr>
            </thead>
        );
    }
}