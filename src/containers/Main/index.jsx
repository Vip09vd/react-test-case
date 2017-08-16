import React, { Component, PropTypes } from 'react';
import Table from "../../components/Table/index";
import Categories from "../../components/Categories/index";

export default class Main extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <div className="container">
                <Categories />
                <Table />
            </div>
        );
	}
}