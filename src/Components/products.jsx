import React, { Component } from 'react';
import Product from './product';

class Products extends React.Component {
    render() { 
        return (
           <React.Fragment>
               
               {this.props.products.map(p => <Product product={p} />)}
               </React.Fragment>
        );
    }
}
 
export default Products;