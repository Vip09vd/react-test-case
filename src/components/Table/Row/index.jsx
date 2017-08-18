import React, {Component, PropTypes} from 'react';
import Cell from "./Cell/index";

export default class Row extends Component {

    static propTypes = {
        columns: PropTypes.arrayOf(PropTypes.shape({
            property: PropTypes.string,
            name: PropTypes.string,
            transform: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        })),
        items: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
    };

    render() {
        return (
            <tr>
                {this.props.columns && this.props.columns.map((column) => <Cell key={column.property}>
                    {column.transform
                        ? <column.transform value={this.props.item[column.property]}/>
                        : this.props.item[column.property]}
                </Cell>)}
            </tr>
        );
    }
}