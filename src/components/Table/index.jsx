import React, { Component, PropTypes } from 'react';
import Header from "./Header/index";
import Row from "./Row/index";

export default class Table extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <table>
                <Header/>
                <tbody>
                {this.props.items.map((item, index) => <Row item={item} key={index}/>)}
                </tbody>
            </table>
		);
	}
}