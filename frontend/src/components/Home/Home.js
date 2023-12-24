import React, { Fragment, useEffect } from 'react'
import {CgMouse} from "react-icons/cg"
import "./Home.css"
import Product from "./Product.js"
import MetaData from '../layout/MetaData.js'
import {useDispatch, useSelector} from "react-redux"
import { getProduct } from '../../action/productAction.js'
// const product = {
//     name: "Blue Tshirt",
//     images: [{url: "https://i.ibb.co/DRST11n/1.webp"}],
//     price: "₹3000",
//     _id: "shuaib",
// };

const Home = () => {
    const dispatch = useDispatch();
    const {loading, error, products, productsCount} = useSelector (
        (state) => state.products
    );

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

  return (
    <Fragment>
        <MetaData title={"ECOMMERCE"} />
        <div className='banner'>
            <p>Welcom to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href='#container'>
                <button>
                    Scroll <CgMouse/>
                </button>
            </a>
        </div>

        <h2 className='homeHeading'>Featured Products</h2>

        <div className='container' id='container'>
{
    products.map((e,i)=>(
        <Product product={e} key={i}/>
    ))
}
        </div>

    </Fragment>
  )
}

export default Home 