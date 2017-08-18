import React, {Component, PropTypes} from 'react';

export default class CategoryItem extends Component {

    static propTypes = {
        isChecked: PropTypes.bool,
        category: PropTypes.string,
        onChange: PropTypes.func
    };

    static defaultProps = {
    	isChecked: false
    };

    handleChange = () => {
        this.props.onChange(this.props.category, !this.props.isChecked);
    };

    render() {
        return (
            <label className="category-item">
                <input checked={this.props.isChecked} onChange={this.handleChange} type="checkbox"/>
                <div className="checkbox"/>
                <p>{this.props.category}</p>
            </label>
        );
    }
}