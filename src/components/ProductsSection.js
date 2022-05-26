import React from "react";

const ProductsSection = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-between">
      <h6 className="flex-shrink-1 w-25 align-self-start">Products</h6>
      <div className="w-75 ps-3">
        <div className="d-flex flex-column">
          <div className="paymentdate d-flex flex-row align-items-center mb-3">
            <div className="product w-75 me-3">
              <label htmlFor="selectProduct" className="form-label">
                Product <span className="label-required">*</span>
              </label>
              <select
                className="form-select"
                id="selectProduct"
                defaultValue="0"
              >
                <option value="0">Open this select menu</option>
                <option value="1">One</option>
              </select>
            </div>

            <div className="unit w-25">
              <label htmlFor="selectUnit" className="form-label">
                Unit <span className="label-required">*</span>
              </label>
              <select className="form-select" id="selectUnit" defaultValue="0">
                <option value="0">Open this select menu</option>
                <option value="1">One</option>
              </select>
            </div>
          </div>

          <div className="paymentdate d-flex flex-row align-items-center mb-3">
            <div className="product w-25 me-2">
              <label htmlFor="selectProduct" className="form-label">
                Quantity <span className="label-required">*</span>
              </label>
              <input type="number" className="form-control"></input>
            </div>

            <div className="unit w-25 me-2">
              <label htmlFor="selectUnit" className="form-label">
                Price <span className="label-required">*</span>
              </label>
              <input type="number" className="form-control"></input>
            </div>

            <div className="unit w-50">
              <label htmlFor="selectUnit" className="form-label w-100">
                <div className="text-end">
                  Total Price <span className="label-required">*</span>
                </div>
              </label>
              <input type="number" className="form-control" disabled></input>
            </div>
          </div>

          <div className="d-flex flex-column justify content-center align-items-end">
            <hr className="w-50 price-seperator"></hr>
            <div className="d-flex flex-row justify-content-between w-50 fw-semibold">
              <div>Total Nett Price</div>
              <div>300.000</div>
            </div>
          </div>

          <button className="btn btn-warning text-light add-btn">
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
      </div>
    </div>
  );
};

export default ProductsSection;
