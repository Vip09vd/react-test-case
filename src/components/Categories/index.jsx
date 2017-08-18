import React, {Component, PropTypes} from 'react';
import CategoryItem from "./CategoryItem/index";

export default class Categories extends Component {

    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.string),
        selectedCategories: PropTypes.arrayOf(PropTypes.string),
        onChange: PropTypes.func
    };

    handleChange = (...args) => {
        this.props.onChange(...args);
    };

    render() {
        return (
            <div className="categories">
                {this.props.categories && this.props.categories.map((category) => <CategoryItem
                    isChecked={this.props.selectedCategories.indexOf(category) !== -1}
                    category={category}
                    key={category}
                    onChange={this.handleChange}
                />)}
            </div>
        );
    }
}
