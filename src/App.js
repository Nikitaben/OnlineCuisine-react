import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import axios from 'axios';
import React from "react";
import Products from "./Components/products";

class App extends React.Component {

  state = {
    products: [],
  };
  componentDidMount() {
     axios.get('http://localhost:3001/products')
     .then((res, err) =>{
         this.setState({ products : res.data});
     });
  }
  render(){
  return (
        <React.Fragment>
          <Products products={this.state.products}></Products>
        </React.Fragment>
      );
  }  
}

export default App;
