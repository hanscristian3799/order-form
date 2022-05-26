import React, { useState, forwardRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  employees,
  changeIsNameDistributionFilled,
  isNameDistributionFilled,
  setName,
  setDistributionCenter,
  setExpiredDate,
  setPaymentType,
  name,
  distributionCenter,
  expiredDate,
  paymentType,
  notes,
  setNotes,
} from "../store/reducers/formSlice";
import { distributionCenters, paymentTypes } from "../helpers/datas";
import "react-datepicker/dist/react-datepicker.css";

const DetailSection = () => {
  const dispatch = useDispatch();
  const employeesData = useSelector(employees);
  const isAppear = useSelector(isNameDistributionFilled);
  const nameVal = useSelector(name);
  const distributionCenterVal = useSelector(distributionCenter);
  const paymentTypeVal = useSelector(paymentType);
  const expiredDateVal = useSelector(expiredDate);

  const ExampleCustomInputDate = forwardRef(({ value, onClick }, ref) => (
    <div className="input-group flex-nowrap" onClick={onClick} ref={ref}>
      <input
        type="text"
        className="form-control"
        placeholder="Expired Date"
        value={expiredDateVal}
        readOnly
        aria-label="Username"
        aria-describedby="addon-wrapping"
      ></input>
      <span className="input-group-text" id="addon-wrapping">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-calendar-event"
          viewBox="0 0 16 16"
        >
          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
        </svg>
      </span>
    </div>
  ));

  const fetchData = async () => {
    await dispatch(fetchUsers());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeName = (val) => {
    dispatch(setName(val.target.value));
  };

  const changeDistibutionCenter = (val) => {
    console.log("VAL", val.target.value);
    dispatch(setDistributionCenter(val.target.value));
    dispatch(changeIsNameDistributionFilled(true));
  };

  const changePaymentType = (val) => {
    dispatch(setPaymentType(val.target.value));
  };

  const changeExpiredDate = (val) => {
    console.log("WOIAAA", val);
    const newDate = val.toLocaleDateString("en-US");
    console.log("NEW DATE", newDate);
    dispatch(setExpiredDate(newDate));
  };

  const submitNotes = (val) => {
    console.log("SUBMIT NOTES", val.target.value);
    dispatch(setNotes(val.target.value));
  };

  return (
    <div className="d-flex flex-row align-items-center justify-content-between">
      <h6 className="flex-shrink-1 w-25 align-self-start">Detail</h6>
      <div className="w-75 ps-3">
        <div className="d-flex flex-column">
          <div className="name mb-3">
            <label htmlFor="selectName" className="form-label">
              Name <span className="label-required">*</span>
            </label>
            <select
              className="form-select"
              id="selectName"
              onChange={changeName}
              value={nameVal}
            >
              <option value="0" disabled>
                Select Name
              </option>
              {employeesData.map((e) => {
                return (
                  <option
                    value={e.id}
                    key={e.id}
                  >{`${e.first_name} ${e.last_name}`}</option>
                );
              })}
            </select>
          </div>

          <div className="distribution mb-3">
            <label htmlFor="selectDistribution" className="form-label">
              Distribution Center <span className="label-required">*</span>
            </label>
            <select
              className="form-select"
              id="selectDistribution"
              onChange={changeDistibutionCenter}
              value={distributionCenterVal}
            >
              {nameVal === "0" ? (
                <option value="0">No data available</option>
              ) : (
                distributionCenters.map((dc, index) => {
                  return index === 0 ? (
                    <option disabled value={dc.id} key={dc.id}>
                      {dc.name}
                    </option>
                  ) : (
                    <option value={dc.id} key={dc.id}>
                      {dc.name}
                    </option>
                  );
                })
              )}
            </select>
          </div>

          {isAppear ? (
            <div className="paymentdate d-flex flex-row align-items-center mb-3">
              <div className="payment w-50 me-3">
                <label htmlFor="selectPayment" className="form-label">
                  Payment Type <span className="label-required">*</span>
                </label>
                <select
                  className="form-select"
                  id="selectPayment"
                  value={paymentTypeVal}
                  onChange={changePaymentType}
                >
                  <option value="0">Select payment</option>
                  {paymentTypes.map((p) => {
                    return (
                      <option value={p.id} key={p.id}>
                        {p.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="date w-50">
                <label htmlFor="selectDate" className="form-label">
                  Expired Date <span className="label-required">*</span>
                </label>
                <DatePicker
                  selected={Date.now()}
                  onChange={(date) => changeExpiredDate(date)}
                  customInput={<ExampleCustomInputDate />}
                />
              </div>
            </div>
          ) : null}

          {isAppear ? (
            <div className="notes mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Notes
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                style={{ resize: "none" }}
                onBlur={submitNotes}
                defaultValue={notes}
              ></textarea>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
