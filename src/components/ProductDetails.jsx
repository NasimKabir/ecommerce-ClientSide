import React, { Component } from 'react';
import ProductService from '../service/ProductService';

class ProductDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount() {
        ProductService.getProductById(this.state.id).then(res => {
            console.log("Product details")
            console.log(res.data.content)
             this.setState({ product: res.data.content}); 
        })
    } 


    render() {
        return (
            <>
               <div className="container">
            {
                this.state.product !== null && (
                    <>
                        <div className="row">
                            <img className="w-100" src={this.state.product.imagePath} alt="" />
                            <div className="col-md-7 p-2">
                                <h1>{this.state.product.title}</h1>
                                <h2>Price:  {this.state.product.price}$</h2>
                            </div>
                            {/* <div className="col-md-4 p-3">
                                <p onClick={() => addtocart(product.id)} className="btn btn-success">Add to Cart</p>
                            </div> */}
                            <p>{this.state.product.description}</p>
                        </div>
                    </>
                )
            }
            </div>
            </>
        );
    }
}

export default ProductDetails;
