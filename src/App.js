import Home from "./pages/Home";
import './App.scss'
import Login from './pages/admin/login/Login.jsx'
import AddProducts from "./pages/admin/addProducts/AddProducts";
import { BrowserRouter as Router ,  Route, BrowserRouter  } from "react-router-dom";


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
