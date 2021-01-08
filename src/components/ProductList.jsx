import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import ProductService from '../service/ProductService';
import SingleProduct from './SingleProduct';
import '../App.css';
class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: 0,
            products: [],
            showProductList: [],
            perPage: 9,
            currentPage: 0,

        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }


    componentDidMount() {
        this.getProduct();
    }

    getProduct() {
        ProductService.getProducts().then((response) => {
            var tdata = response.data.content.productList;
            var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(tdata.length / this.state.perPage),
                showProductList: tdata,
                products: slice
            })
        })
    }
    handlePageClick = (event) => {
        const selectedPage = event.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
        const data = this.state.showProductList;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            products: slice
        })

    }

    render() {

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ml-4">
                            <div className="row">
                                {
                                    this.state.products !== null &&
                                    this.state.products.map((item, i) => (
                                        <div className="col-md-4 mt-4" key={i}>
                                            <SingleProduct item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <ReactPaginate
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}

                    activeClassName={"active"} />
            </>
        );
    }
}

export default ProductList;