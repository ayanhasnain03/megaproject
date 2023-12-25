import React from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import ProductDetails from './components/Products/ProductDetails.js';
import Search from "./components/Product/Search.js";
import Products from "./components/Product/Products.js";
const App = () => {
  React.useEffect(() => {
    WebFont.load({
      google:{
        families:["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return (

<Router>
<Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route  path="/product/:id" element={<ProductDetails/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route path="/products/:keyword" element={<Products/>} />
        <Route exact path="/search" element={<Search/>} />
      </Routes>
      <Footer />
  </Router>


  )
}

export default App