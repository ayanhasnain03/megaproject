import React from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import ProductDetails from './components/Product/ProductDetails.js';
import Search from "./components/Product/Search.js";
import Products from "./components/Product/Products.js";
import LoginSignUp from "./components/User/LoginSignUp.js";
import store from "./store.js";
import { loadUser } from "./action/userAction.js";
import UserOptions from "./components/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./components/User/Profile.js";
import ProtectedRoute from './components/Route/ProtectedRoute.js';
import UpdateProfile from './components/User/UpdateProfile.js';
import UpdatePassword from "./components/User/UpdatePassword.js";
import ForgotPassword from "./components/User/ForgotPassword.js";
import "./App.css"
const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    WebFont.load({
      google:{
        families:["Roboto", "Droid Sans", "Chilanka"]
      }
    })
    store.dispatch(loadUser());
  }, [])
  return (

<Router>
<Header />
{isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path="/product/:id" element={<ProductDetails/>} />
        <Route  path="/products" element={<Products/>} />
        <Route path="/products/:keyword" element={<Products/>} />
        <Route  path="/search" element={<Search/>} />
        <Route path='/login' element={<LoginSignUp/>}/>

        <Route element={<ProtectedRoute/>}>
        <Route path='/account' element={<Profile/>}/>
        <Route path='/me/update' element={<UpdateProfile/>}/>
        <Route  path="/password/update" element={<UpdatePassword/>} />
        </Route>
        <Route  path="/password/forgot" element={<ForgotPassword/>} />
      </Routes>
      <Footer />
  </Router>


  )
}

export default App