import React from 'react';
import Products from './products';

class HomePage extends React.Component {
    render() { 
        return (
            <React.Fragment>
        <div className="header text-center">
          <h2>Welcome to our Indian Tandoor Cuisine</h2>
          <h3>What is your choice?</h3>
        </div>
        <Products/>
        </React.Fragment>
        );
    }
}
 
export default HomePage;