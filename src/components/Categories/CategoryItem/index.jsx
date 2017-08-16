import React, { Component, PropTypes } from 'react';

export default class CategoryItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
            <label className="category-item">
                <input type="checkbox"/>
                <p>{this.props.type}</p>
            </label>
		);
	}
}