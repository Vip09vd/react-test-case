import React, { Component, PropTypes } from 'react';
import CategoryItem from "./CategoryItem/index";

export default class Categories extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <div className="categories">
                <CategoryItem />
            </div>
		);
	}
}