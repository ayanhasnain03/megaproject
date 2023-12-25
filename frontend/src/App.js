import React from 'react'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import ProductDetails from './components/Products/ProductDetails.js';
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
      </Routes>
      <Footer />
  </Router>


  )
}

export default App