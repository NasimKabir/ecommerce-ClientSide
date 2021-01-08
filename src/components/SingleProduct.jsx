import React from 'react'

const SingleProduct = ({ item }) => {
    return (

        <div className="single-product card ml-4">
            <img className="card-img-top border border-primary rounded image mt-2" src={item.imagePath} alt="product" style={{ width: '250px', height: '150px' }} />

            <div className="card-body">
                <h5 className="card-title">{item.description}</h5>
                <a href="#" className="btn btn-primary">Add to Card</a>
            </div>
            <div className="div card-footer">
                <h5>Price :{item.price}</h5>
            </div>
        </div>

    )
}

export default SingleProduct
