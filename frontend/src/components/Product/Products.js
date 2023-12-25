import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../action/productAction'
import { useParams } from 'react-router-dom'
import Loader from '../layout/Loader/Loader'
import ProductCard from '../Home/ProductCard'
import Pagination from "react-js-pagination";
import "./Product.css"
const Products = () => {
    const dispatch = useDispatch()
    const {loading, error, products,resultPerPage,productsCount}=useSelector(state=>state.products)
    const { keyword } = useParams();
    const [currentPage, setCurrentPage] = useState(1)
    const setCurrentPageNo = (e) => {
      setCurrentPage(e);
    };
    useEffect(()=>{

dispatch(getProduct(keyword,currentPage))
    },[dispatch,keyword,currentPage])
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
          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
            </Fragment>
        )
    }
    </Fragment>
  )
}

export default Products