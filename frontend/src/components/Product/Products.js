import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct,clearErrors } from "../../action/productAction";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { Typography } from "@material-ui/core";
import "./Product.css";
import { useAlert } from "react-alert";
const categories = [
  "kurta",
  "shirt",
  "jogger",
  "watch",
  "jeans",
  "shirts",
  "bracelets",
  "phone",
];
const Products = () => {
  const dispatch = useDispatch();
  const {
    loading,
    products,
    resultPerPage,
    productsCount,
    filteredProductsCount,
    error,
  } = useSelector((state) => state.products);
  const { keyword } = useParams();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 5000]);
  const [category, setCategory] = useState("");
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
    dispatch(getProduct(keyword, currentPage, price, category,error,alert));
  }, [dispatch, keyword, currentPage, price, category,alert,error]);
  let count = filteredProductsCount;
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products.map((e, i) => (
              <ProductCard product={e} key={i} />
            ))}
          </div>
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
             value={price}
             onChange={priceHandler}
             valueLabelDisplay="auto"
             aria-labelledby="range-slider"
             min={0}
             max={5000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          {resultPerPage < count && (
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
      )}
    </Fragment>
  );
};

export default Products;
