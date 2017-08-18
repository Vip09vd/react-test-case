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
        selectedItems: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            type: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.string,
            rating: PropTypes.number
        })),
        categories: PropTypes.arrayOf(PropTypes.string),
        selectedCategories: PropTypes.arrayOf(PropTypes.string),
        columns: PropTypes.arrayOf(PropTypes.shape({
            property: PropTypes.string,
            name: PropTypes.string,
            transform: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        })),
        selectCategory: PropTypes.func,
        unselectCategory: PropTypes.func,
        sortItems: PropTypes.func
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
                    categories={this.props.categories}
                    selectedCategories={this.props.selectedCategories}
                    onChange={this.handleCategorySelection}
                />
                <Table
                    items={this.props.selectedItems}
                    columns={this.props.columns}
                    onHeaderCellClick={this.handleHeaderCellClick}
                />
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
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