import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  products,
  name,
  distributionCenter,
  paymentType,
  expiredDate,
} from "../store/reducers/formSlice";

const SubmitSection = () => {
  const userProducts = useSelector(products);
  const date = useSelector(expiredDate);
  const nameVal = useSelector(name);
  const distribution = useSelector(distributionCenter);
  const payment = useSelector(paymentType);

  return (
    <div className="d-flex flex-row align-items-center justify-content-end">
      <button type="button" className="btn btn-light me-2">
        Cancel
      </button>
      <button
        type="button"
        className="btn btn-success"
        disabled={
          userProducts.find((u) => u.status === "empty") ||
          !date ||
          !nameVal ||
          !distribution ||
          !payment
        }
      >
        Confirm
      </button>
    </div>
  );
};

export default SubmitSection;
