import React, { Component } from 'react';
import ProductList from '../components/ProductList';

class MainContent extends Component {
    render() {
        return (
            <div>
                    <div className="features_items col-sm-11">
                        <h2 className="title text-center">Features Items</h2>
                    <ProductList />
                    </div>

            </div>
        );
    }
}

export default MainContent;