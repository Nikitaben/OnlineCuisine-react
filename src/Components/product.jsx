import React, { Component } from 'react';

const Product = props => {
        return (
            <React.Fragment>

                <div className="container" >
             <div className="card space shadow-em">
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <img src={props.product.imageUrl} alt={ props.product.name } className="img-responsive float-end card-img" />
                  <div className="card-text">
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