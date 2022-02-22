import React from "react";
import "./App.css";
// import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card">
              <div className="card-header">
                <h1>Todos : 0</h1>
              </div>
              <div className="card-body">
                <form className="mb-3 d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Yozing..."
                  />
                  <button className="btn btn-success ml-2">Add</button>
                </form>
              </div>
              <ul className="list-group list-group-flush ">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <button className="btn btn-danger mt-2">Remowe</button>
                </li>
              </ul>
              <div className="card-footer">
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
