import React from 'react';
import axios from 'axios';



class ProductPage extends React.Component {
         state = {product: [], };
         server = "http://localhost:3001/products";
        componentDidMount = () => {
                const id = this.props.match.params.id;
                axios
                .get(this.server + "/" + id)
                .then((res, err) => {
                        const product = res.data;
                        this.setState({product});
                });
        };


render(){
        return (
            <React.Fragment>
                <div className="container">
                    
                    <div className="card space shadow-em">
                     <div className="card-body">
                     <h5 className="card-title ">{this.state.product.name}</h5>
                     <h4 className="card-subtitle">{this.state.product.price}</h4>
                     <img src={this.state.product.imageUrl} alt={ this.state.product.name } className="img-responsive float-end card-img" />
                     <div className="card-text">
                     <p>{this.state.product.description}</p>
                
                 
                <button class="btn btn-primary snipcart-add-item"
                data-item-id={this.state.product.id}
                data-item-name={this.state.product.name}
                data-item-price={this.state.product.price}
                data-item-image={this.state.product.imageUrl}
                data-item-description={this.state.product.description}
               
                data-item-custom1-name="Sizes"
                data-item-custom1-options="Small|Medium[+4.00]|Large[+5.00]">Add to cart</button>
                </div>
                </div>
                </div>
                </div>     
        
                
            </React.Fragment>
        );
        }
}
 
export default ProductPage;