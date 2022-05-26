import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DetailSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="input-group flex-nowrap" onClick={onClick} ref={ref}>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        defaultValue={value}
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
  return (
    <div className="d-flex flex-row align-items-center justify-content-between">
      <h6 className="flex-shrink-1 w-25 align-self-start">Detail</h6>
      <div className="w-75 ps-3">
        <div className="d-flex flex-column">
          <div className="name mb-3">
            <label htmlFor="selectName" className="form-label">
              Name <span className="label-required">*</span>
            </label>
            <select className="form-select" id="selectName" defaultValue="0">
              <option value="0">Open this select menu</option>
              <option value="1">One</option>
            </select>
          </div>

          <div className="distribution mb-3">
            <label htmlFor="selectDistribution" className="form-label">
              Distribution Center <span className="label-required">*</span>
            </label>
            <select
              className="form-select"
              id="selectDistribution"
              defaultValue="0"
            >
              <option value="0">Open this select menu</option>
              <option value="1">One</option>
            </select>
          </div>

          <div className="paymentdate d-flex flex-row align-items-center mb-3">
            <div className="payment w-50 me-3">
              <label htmlFor="selectPayment" className="form-label">
                Payment Type <span className="label-required">*</span>
              </label>
              <select
                className="form-select"
                id="selectPayment"
                defaultValue="0"
              >
                <option value="0">Open this select menu</option>
                <option value="1">One</option>
              </select>
            </div>

            <div className="date w-50">
              <label htmlFor="selectDate" className="form-label">
                Expired Date <span className="label-required">*</span>
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
              />
            </div>
          </div>

          <div className="notes mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Notes
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              style={{ resize: "none" }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
