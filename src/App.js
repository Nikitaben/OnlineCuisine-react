import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import React from "react";
import Products from "./Components/products";
import Header from "./Components/header";
import HomePage from "./Components/homepage";
import ProductPage from "./Components/productpage";
import {
  BrowserRouter as Router, Switch,
  Route
  
} from "react-router-dom";


class App extends React.Component {

  state = {
    products: [],
  };
 
  render(){
  return (
    <Router>
        <React.Fragment>
      
          <Header/>
          <Switch>
          <Route path='/product/:id' component={ProductPage}/> 
          
          <Route path='/' component={HomePage}/>
          <Route path='/products' component={Products}/>
          <ProductPage/>
         
          
          
      
     </Switch>
        </React.Fragment>
        </Router>
      );
  }  
}

export default App;
