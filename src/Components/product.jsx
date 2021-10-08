import React from 'react';
import {Link} from 'react-router-dom';

const Product = (props) => {
        return (
            <React.Fragment>
                
                 <Link to={`/product/${props.product.id}`} className='product'>
                <div className="container">
                    
             <div className="card space shadow-em">
                <div className="card-body">
                    <h5 className="card-title ">{props.product.name}</h5>
                    <h4 className="card-subtitle">{props.product.price}</h4>
                    <img src={props.product.imageUrl} alt={ props.product.name } className="img-responsive float-end card-img" />
                  <div className="card-text">
                      <p>{props.product.description}</p>
                     
                      <span></span>
                   </div>
                </div>
                </div>
                </div>
               </Link>
              
                 </React.Fragment>
        );
    };

 
export default Product;