import React from 'react'
import Header from './components/layout/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer'
import WebFont from 'webfontloader';
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
      <Header/>
      <Footer/>
  </Router>


  )
}

export default App