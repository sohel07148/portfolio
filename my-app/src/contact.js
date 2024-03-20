import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

function contact() {
  return (
    <div className="contact">
      <div className="contact_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="contact_text">
                <h5>
                  Let's chat. <br /> Tell me about your project.
                </h5>
                <p>let's create something together</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact_form">
                <htmlForm>
                  <h4>Get in Touch</h4>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder=""
                      required
                    />
                    <label htmlFor="floatingInput">
                      Your Name<span className="red">*</span>
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="number"
                      min="10"
                      required
                    />
                    <label htmlFor="floatingInput">
                      Mobile Number<span className="red">*</span>
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      required
                    />
                    <label htmlFor="floatingInput">
                      Email address<span className="red">*</span>
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder=""
                      required
                    />
                    <label htmlFor="floatingInput">
                      Message<span className="red">*</span>
                    </label>
                  </div>

                  <input type="submit" name="button" id="submit" />
                </htmlForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
