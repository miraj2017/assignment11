import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import ReviewOrder from "./Components/ReviewOrder/ReviewOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddService from "./Components/AddService/AddService";
import Cart from "./Components/Cart/Cart";
import Confirm from "./Components/Confirm/Confirm";
// import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
// import SeeDetails from "./Components/SeeDetails/SeeDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            {/* <Route path="/seedetails">
              <SeeDetails></SeeDetails>
            </Route> */}
            {/* <Route path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route> */}
            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/revieworder">
              <ReviewOrder></ReviewOrder>
            </PrivateRoute>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/confirm">
              <Confirm></Confirm>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
