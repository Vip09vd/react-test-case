import React, { Component, PropTypes } from 'react';

export default class CategoryItem extends Component {
    static propTypes = {
    	category: PropTypes.string
    };
    
	render() {
		return (
            <label className="category-item">
                <input type="checkbox"/>
                <p>{this.props.category}</p>
            </label>
		);
	}
}