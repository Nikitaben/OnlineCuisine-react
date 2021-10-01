import React, { Component } from 'react';

const Product = props => {
        return (
            <React.Fragment>
             <div className="card" style="width: 18rem;">
                <div a="card-body">
                    <h5 className="card-title">{props.name}</h5>
                  <div className="card-text">
                      <p>{props.description}</p>
                      <p>{props.price}</p>
                   </div>
                </div>
                </div>
            </React.Fragment>
        );
    };

 
export default Product;