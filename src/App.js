import './App.css';
import React, {useEffect} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Checkout from './components/Checkout'
import Login from './components/Login'
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './components/Payment'
import Orders from './components/Orders'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51JK4AySIdDahZkZ7oBmo1cZP5iejMw6Qk7XaZPovbWGIktrjOEpPhEQWyLu8FzgG4Pbn3Addg6DQWbL66MuB5ej500dxkl7TMr")
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>> ', authUser?.email);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null 
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
