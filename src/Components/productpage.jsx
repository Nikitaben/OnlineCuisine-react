import React, { Component } from 'react';
import axios from 'axios';



class ProductPage extends React.Component {
         state = {products: []}
         server = "http://localhost:3001/products"
        handleblur =(id) =>{
                axios
                .get(this.server + "/" + id)
                .then((res, err) => {
                        const product = res.data;
                        this.setState({product});
                })
        }


render(){
        return (
            <React.Fragment>

                    
               
              
               <div className="center">
                <div className="col-md-6 select-outline">

                <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                <option value="disabled selected">Choose your option</option>
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
                </select>
                <div>
                
                            <button
                data-item-id="product.id"
                data-item-name="product.name"
                data-item-price="product.price"
                data-item-image="product.imageUrl"
                className="snipcart-add-item">Add to Cart</button>
                </div>
                        </div>
            </div>
                
            </React.Fragment>
        );
        }
}
 
export default ProductPage;