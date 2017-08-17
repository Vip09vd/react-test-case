import React, {Component, PropTypes} from 'react';
import Table from "../../components/Table/index";
import Categories from "../../components/Categories/index";
import {connect} from "react-redux";
import {
    getCategories,
    getColumns,
    getItems,
    getSelectedCategories,
    getSelectedItems
} from "../../selectors";
import {selectCategory, sortItems, unselectCategory} from "../../actions/root-actions";
import {bindActionCreators} from "redux";

class Main extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            type: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.string,
            rating: PropTypes.number
        }))
    };

    handleCategorySelection = (category, isChecked) => {
        if (isChecked) {
            this.props.selectCategory(category);
        } else {
            this.props.unselectCategory(category);
        }
    };

    handleHeaderCellClick = (property) => {
        this.props.sortItems(property)
    };

    render() {
        return (
            <div className="container">
                <Categories
                    selectedCategories={this.props.selectedCategories}
                    categories={this.props.categories}
                    onChange={this.handleCategorySelection}
                />
                <Table onHeaderCellClick={this.handleHeaderCellClick} items={this.props.selectedItems} columns={this.props.columns}/>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        items: getItems(store),
        categories: getCategories(store),
        selectedCategories: getSelectedCategories(store),
        selectedItems: getSelectedItems(store),
        columns: getColumns(store)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectCategory: bindActionCreators(selectCategory, dispatch),
        unselectCategory: bindActionCreators(unselectCategory, dispatch),
        sortItems: bindActionCreators(sortItems, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);