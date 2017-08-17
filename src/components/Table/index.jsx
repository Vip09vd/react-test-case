import React, { Component, PropTypes } from 'react';
import Header from "./Header/index";
import Row from "./Row/index";

export default class Table extends Component {

    handleHeaderCellClick = (property) => {
    	this.props.onHeaderCellClick(property)
	};

	render() {
		return (
            <table>
                <Header onHeaderCellClick={this.handleHeaderCellClick} columns={this.props.columns}/>
                <tbody>
               	 {this.props.items.map((item, index) => <Row columns={this.props.columns} item={item} key={item.id != null ? item.id : index}/>)}
                </tbody>
            </table>
		);
	}
}