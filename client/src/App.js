import HomePage from "./Pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductPage from "./Pages/product";
import Login from "./Pages/signin";
import Register from "./Pages/register";
import MyCart from "./Pages/myCart";
import Footer from "./Component/Layout/footer"
import Header from "./Component/Layout/header"


function App() {
  return (

    <Router>
    <div>
    <Header/>
      <Switch>
      <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductPage />
        </Route>
        <Route exact path="/cart">
          < MyCart />
        </Route>
        <Route exact path="/:id">
          < ProductPage />
        </Route>
      
     </Switch>
  <Footer/>
    </div>
  </Router>
  );
}

export default App;
