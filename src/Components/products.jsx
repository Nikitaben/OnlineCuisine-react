import React  from 'react';
import Product from './product';
import axios from 'axios';

class Products extends React.Component {
    state = {
        products: [],
      };
      
      componentDidMount() {
        axios.get('http://localhost:3001/products')
        .then((res) =>{
            this.setState({ products : res.data});
        })
        .catch((err) => console.log(err));
     }
    render() { 
        return (
           <React.Fragment>
               
               {this.state.products.map((p) => (<Product key={p.id} product={p} />))}
               </React.Fragment>
        );
    }
}
 
export default Products;