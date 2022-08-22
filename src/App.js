import Home from "./pages/Home";
import './App.scss'
import Login from './pages/login/Login.jsx'

import { BrowserRouter as Router ,  Route, BrowserRouter,  } from "react-router-dom";
import AddProducts from "./pages/addProducts/AddProducts";

function App() {
  return (
    <>
    <div className="app">
        <Router>
          <BrowserRouter>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/addProducts">
              <AddProducts />
            </Route>
          </BrowserRouter>
        </Router>
    </div>
    </>
  );
}

export default App;
