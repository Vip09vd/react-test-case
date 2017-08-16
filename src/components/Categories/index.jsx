import React, { Component, PropTypes } from 'react';
import CategoryItem from "./CategoryItem/index";

export default class Categories extends Component {
    static propTypes = {
    	categories: PropTypes.arrayOf(PropTypes.string)
    };

	render() {
		return (
            <div className="categories">
                {this.props.categories.map((category, index) => <CategoryItem category={category} key={index}/>)}
            </div>
		);
	}
}
