import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../action/productAction'
import { useParams } from 'react-router-dom'
import Loader from '../layout/Loader/Loader'
import ProductCard from '../Home/ProductCard'
import "./Product.css"
const Products = () => {
    const dispatch = useDispatch()
    const {loading, error, products}=useSelector(state=>state.products)
    const { keyword } = useParams();
    useEffect(()=>{

dispatch(getProduct(keyword))
    },[dispatch,keyword])
  return (
    <Fragment>
        {loading?(
            <Loader/>
        ):(
            <Fragment>
                 <h2 className="productsHeading">Products</h2>
          <div className="products">
          {
        products.map((e,i)=>(
            <ProductCard product={e} key={i}/>
        ))
    }
          </div>
            </Fragment>
        )
    }
    </Fragment>
  )
}

export default Products