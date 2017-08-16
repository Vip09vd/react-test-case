import React, { Component, PropTypes } from 'react';
import Table from "../../components/Table/index";
import Categories from "../../components/Categories/index";
import {connect} from "react-redux";
import {getCategories, getItems} from "../../reducers/root-reducer";

class Main extends Component {
	render() {
		return (
            <div className="container">
                <Categories categories={this.props.categories}/>
                <Table items={this.props.items}/>
            </div>
        );
	}
}

function mapStateToProps(store) {
    return {
        items: getItems(store),
        categories: getCategories(store),
        selectedCategory: store.selectedCategory
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);