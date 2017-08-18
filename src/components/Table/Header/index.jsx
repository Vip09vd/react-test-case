import React, {Component, PropTypes} from 'react';
import Cell from "./Cell/index";

export default class Header extends Component {

    static propTypes = {
        columns: PropTypes.arrayOf(PropTypes.shape({
            property: PropTypes.string,
            name: PropTypes.string,
            transform: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        })),
        handleCellClick: PropTypes.func
    };

    handleCellClick = (property) => {
        this.props.onHeaderCellClick(property);
    };

    render() {
        return (
            <thead>
            <tr>
                {this.props.columns && this.props.columns.map((column) => <Cell
                    id={column.property}
                    key={column.property}
                    onHeaderCellClick={this.handleCellClick}
                >
                    {column.name}
                </Cell>)}
            </tr>
            </thead>
        );
    }
}