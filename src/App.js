import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import React from "react";
import Products from "./Components/products";
import Header from "./Components/header";
import HomePage from "./Components/homepage";
import ProductPage from "./Components/productpage";
import {
  BrowserRouter,Switch,
  Route
  
} from "react-router-dom";


class App extends React.Component {

  state = {
    products: [],
  };
 
  render(){
  return (
    <BrowserRouter>
        <React.Fragment>
      
          <Header/>
          <Switch>
          < Route path='/' component={HomePage}/>
          <Route path='/products' component={Products}/>
          {/* <Route path='/product/:id' exact component={ProductPage}/> */}
          <ProductPage/>
          
          
      
     </Switch>
        </React.Fragment>
        </BrowserRouter>
      );
  }  
}

export default App;
