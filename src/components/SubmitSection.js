import React from "react";

const SubmitSection = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-end">
      <button type="button" className="btn btn-light me-2">
        Cancel
      </button>
      <button type="button" className="btn btn-success">
        Confirm
      </button>
    </div>
  );
};

export default SubmitSection;
