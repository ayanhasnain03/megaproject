import React, { Fragment, useEffect } from 'react'
import "./Home.css"
import MetaData from '../layout/MetaData.js'
import {useDispatch, useSelector} from "react-redux"
import { getProduct,clearErrors } from '../../action/productAction.js'
import ProductCard from './ProductCard.js'
import Loader from '../layout/Loader/Loader.js'
import { useAlert } from "react-alert";
// const product = {
//     name: "Blue Tshirt",
//     images: [{url: "https://i.ibb.co/DRST11n/1.webp"}],
//     price: "₹3000",
//     _id: "shuaib",
// };

const Home = () => {
    const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if(getProduct){
        alert.success("Welcome To Eccomerce")
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
        {loading ? (
            <Loader/>
        ):(  <Fragment>
            <MetaData title={"ECOMMERCE"} />
            <div className='banner'>
               <p>Welcom to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
            </div>
   
            <h2 className='homeHeading'>Featured Products</h2>
   
           <div className='container' id='container'>
    {
        products.map((e,i)=>(
            <ProductCard product={e} key={i}/>
        ))
    }
            </div>
   
        </Fragment>)
        }
    </Fragment>
   
  )
}

export default Home 