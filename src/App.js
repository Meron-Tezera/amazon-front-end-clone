
import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import {auth} from "./firebase"
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51MJ4o6F5bVZ863zISsOGuvZ2gHm8RoihI2yNVMjOSj4kWBJ1fD3lfnc0aIoBoP6RhVcy6DoCfOc16ZtXuMHIS5Sv00GgzIKLas"
);

function App() {
  const [{user},dispach]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      // the user just logged in / the user was logged in
      if(authUser){
        dispach({
          type: "SET_USER",
          user: authUser,
        });
      }else{
        //the user logged out 
        dispach({
          type: "SET_USER",
          user: null,
        });
      }
    });
  } ,[]);
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Header />
                <Payment />
              </Elements>
            }
          />
{/* <Route path="/payment" 
element={
  <>
  <Header/>
  <Elements stripe={promise}>
    <Payment/>
  </Elements>
  </>
}

/> */}
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
        {/* <Home /> */}
      </div>
    </Router>
  );
}

export default App;
