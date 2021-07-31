import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Create extends React.Component {
  render() {
    return (
      <div>
        <nav className="archimydes-navbar">
          <div className="archimydes-header">Archimydes Challenge</div>
        </nav>
        <div className="user-form-container">
          <h1 className="create-user-heading">
            <span className="left-arrow-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </span>
            Create User
          </h1>
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="userName">Name</label>
                <input
                  type="text"
                  className="user-input form-control"
                  id="userName"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="userEmail">Email</label>
                <input
                  type="email"
                  className="user-input form-control"
                  id="userEmail"
                  placeholder="User Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="userRoles">Roles</label>
                <select className="user-input form-control" id="userRoles">
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </div>
              <h2 className="cancel-btn">
                <Link to="/" className="cancel-anchor">
                  Cancel
                </Link>
              </h2>
              <button type="submit" className="create-button">
                Create User
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
