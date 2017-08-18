import React, { Component, PropTypes } from 'react';
import Header from "./Header/index";
import Row from "./Row/index";

export default class Table extends Component {

	static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            type: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.string,
            rating: PropTypes.number
        })),
        columns: PropTypes.arrayOf(PropTypes.shape({
            property: PropTypes.string,
            name: PropTypes.string,
            transform: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        })),
        handleHeaderCellClick: PropTypes.func
    };

    handleHeaderCellClick = (property) => {
    	this.props.onHeaderCellClick(property)
	};

	render() {
		return (
            <table>
                <Header columns={this.props.columns} onHeaderCellClick={this.handleHeaderCellClick}/>
                <tbody>
               	 {this.props.items && this.props.items.map((item, index) => <Row
                     columns={this.props.columns}
                     item={item}
                     key={item.id != null ? item.id : index}
                 />)}
                </tbody>
            </table>
		);
	}
}