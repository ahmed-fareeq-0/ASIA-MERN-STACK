import './App.scss'

import { BrowserRouter as Router ,  Route, BrowserRouter  } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

import Home from "./pages/Home";
import Login from './pages/admin/login/Login.jsx'
import AddProducts from "./pages/admin/addProducts/AddProducts";
import UpdateProduct from './pages/admin/updateProduct/UpdateProduct';

import { productsURI } from "./lib/utility";

function App() {
  const [ products, setProducts ] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(productsURI);

    setProducts(data);
  }
  
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line 
  }, [])

  return (
    <>
    <div className="app">
        <Router>
          <BrowserRouter>
            <Route exact path="/">
              <Home products={ products }/>
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/addProducts">
              <AddProducts />
            </Route>

            <Route path="/updateProducts/:id">
              <UpdateProduct />
            </Route>

          </BrowserRouter>
        </Router>
    </div>
    </>
  );
}

export default App;
