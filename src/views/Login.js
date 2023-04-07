import React from "react";

export const Login = () => {
  return (
    <div>
      <div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="gymdude123"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Password123!"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Login!</button>
    </div>
  );
};
