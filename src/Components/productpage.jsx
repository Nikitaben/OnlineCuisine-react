import React, { Component } from 'react';

const ProductPage = props => {
        return (
            <React.Fragment>
               
               
               <div className="row">
                <div className="col-md-6 select-outline">

                <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
                </select>
                <div>
                
                            <button
                data-item-id="product.id"
                data-item-name="product.name"
                data-item-price="price"
                data-item-image="imageUrl"
                class="snipcart-add-item "mat-button>Add to Cart</button>
                </div>
                        </div>
            </div>
                
            </React.Fragment>
        );
    
}
 
export default ProductPage;