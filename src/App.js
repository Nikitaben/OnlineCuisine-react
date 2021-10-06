import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import React from "react";
import Products from "./Components/products";
import Header from "./Components/header";
import HomePage from "./Components/homepage";
import ProductPage from "./Components/productpage";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {

  state = {
    products: [],
  };
 
  render(){
  return (
        <React.Fragment>
           <BrowserRouter>
            
          <Header/>
          <Route exact path="/" components={HomePage}/>
          <Products products={this.state.products}></Products>
          <ProductPage/>
          
          
      
      </BrowserRouter>
        </React.Fragment>
      );
  }  
}

export default App;
