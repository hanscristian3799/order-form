import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isNameDistributionFilled,
  totalProductsPrice,
  products,
  addProducts,
} from "../store/reducers/formSlice";
import ProductComponent from "./ProductComponent";

const ProductsSection = () => {
  const dispatch = useDispatch();

  const isAppear = useSelector(isNameDistributionFilled);
  const totalPriceVal = useSelector(totalProductsPrice);
  const productList = useSelector(products);

  const addNewProduct = () => {
    dispatch(addProducts(null));
  };

  return isAppear ? (
    <div>
      <hr></hr>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h6 className="flex-shrink-1 w-25 align-self-start">Products</h6>
        <div className="d-flex flex-column w-75 justify-content-between">
          {productList.map((p, index) => {
            return <ProductComponent key={index} index={index} />;
          })}
        </div>
      </div>
      <div className="d-flex flex-column justify content-center align-items-end mt-4">
        <div className="d-flex flex-row justify-content-between w-50 fw-semibold">
          <div>Total</div>
          <div>{totalPriceVal}</div>
        </div>
      </div>

      <button
        className="btn btn-warning text-light add-btn"
        onClick={addNewProduct}
      >
        <div className="d-flex flex-row align-items-center justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg me-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
          <div>New Item</div>
        </div>
      </button>
    </div>
  ) : null;
};

export default ProductsSection;
