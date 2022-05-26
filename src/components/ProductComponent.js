import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { products } from "../helpers/datas";
import { addProducts, removeProduct } from "../store/reducers/formSlice";

const ProductComponent = ({ index }) => {
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNettPrice, setTotalNettPrice] = useState(0);

  const changeProductName = (event) => {
    setSelectedProduct(event.target.value);
    setSelectedUnit("");
    setPrice(0);
    setQuantity(0);
  };

  const changeProductUnit = (event) => {
    if (event.target.value === "0") {
      setSelectedUnit("");
      setPrice(0);
      setQuantity(0);
      return;
    }
    setSelectedUnit(event.target.value);
    const unit = products
      .find((p) => p.product_name === selectedProduct)
      .units.find((u) => u.unit_name === event.target.value);
    setPrice(unit.unit_price);
    setQuantity(0);
  };

  const changeQuantity = (event) => {
    if (event.target.value < 0) return;
    setQuantity(event.target.value);
    const totalPrice = price * event.target.value;
    console.log("Tprice", totalPrice);
    setTotalPrice(totalPrice);
    setTotalNettPrice(totalPrice);
    dispatch(
      addProducts({
        index,
        name: selectedProduct,
        unit: selectedUnit,
        quantity,
        price,
        totalPrice,
      })
    );
  };

  const removeElement = () => {
    dispatch(removeProduct({ index, totalPrice }));
  };

  return (
    <div className="w-100 ps-3 position-relative">
      {index !== 0 ? (
        <div
          className="position-absolute top-25 start-0 translate-middle"
          onClick={removeElement}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      ) : null}
      <div className="d-flex flex-column">
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="product w-75 me-3">
            <label htmlFor="selectProduct" className="form-label">
              Product <span className="label-required">*</span>
            </label>
            <select
              className="form-select"
              id="selectProduct"
              defaultValue="0"
              onChange={changeProductName}
            >
              <option value="0" disabled>
                Select product
              </option>
              {products.map((p) => {
                return (
                  <option value={p.product_name} key={p.product_name}>
                    {p.product_name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="unit w-25">
            <label htmlFor="selectUnit" className="form-label">
              Unit <span className="label-required">*</span>
            </label>
            <select
              className="form-select"
              id="selectUnit"
              defaultValue="0"
              onChange={changeProductUnit}
            >
              <option value="0">Select unit</option>
              {selectedProduct !== ""
                ? products
                    .find((p) => p.product_name === selectedProduct)
                    .units.map((u) => {
                      return (
                        <option value={u.unit_name} key={u.unit_name}>
                          {u.unit_name}
                        </option>
                      );
                    })
                : null}
            </select>
          </div>
        </div>

        <div className="paymentdate d-flex flex-row align-items-center mb-3">
          <div className="product w-25 me-2">
            <label htmlFor="selectProduct" className="form-label">
              Quantity <span className="label-required">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              onChange={changeQuantity}
              disabled={!selectedUnit}
              value={quantity}
            ></input>
          </div>

          <div className="unit w-25 me-2">
            <label htmlFor="selectUnit" className="form-label">
              Price <span className="label-required">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              disabled
              value={price}
            ></input>
          </div>

          <div className="unit w-50">
            <label htmlFor="selectUnit" className="form-label w-100">
              <div className="text-end">
                Total Price <span className="label-required">*</span>
              </div>
            </label>
            <input
              type="number"
              className="form-control"
              disabled
              value={totalPrice}
            ></input>
          </div>
        </div>

        <div className="d-flex flex-column justify content-center align-items-end">
          <hr className="w-50 price-seperator"></hr>
          <div className="d-flex flex-row justify-content-between w-50 fw-semibold">
            <div>Total Nett Price</div>
            <div>{totalNettPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
