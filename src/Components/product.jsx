import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Product = props => {
        return (
            <React.Fragment>
        
                <div class="container" >
             <div class="card space shadow-em">
                <div class="card-body">
                    <h5 class="card-title ">{props.product.name}</h5>
                    <img src={props.product.imageUrl} alt={ props.product.name } className="img-responsive float-end card-img" />
                  <div class="card-text">
                      <p>{props.product.description}</p>
                      <p>{props.product.price}</p>
                      <span></span>
                   </div>
                </div>
                </div>
                </div>
               
              
                 </React.Fragment>
        );
    };

 
export default Product;