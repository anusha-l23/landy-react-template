import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div style={{margin:"2em"}}>
      <img
        src="https://admin.myraceindia.com/assets/bannerimage/common_ebanner.png"
        alt="images"
        style={{ width: "100vw" }}
      />
      <div>
        <Form>
          <div className="container">
            <p>
              Name <span className="text-danger">*</span>
            </p>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstName"
                  //value={ data.firstName }
                  //onChange={ this.handleInputChange }
                />

                <label htmlFor="firstname" className="text-sm">
                  First Name
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastName"
                  //value={ data.lastName }
                  //onChange={ this.handleInputChange }
                />

                <label htmlFor="lastname" className="text-sm">
                  Last Name
                </label>
              </div>
            </div>

            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="email">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  // value={ data.email }
                  //onChange={ this.handleInputChange }
                />
              </div>

              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="mobilenumber">
                  Mobile Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobilenumber"
                  name="mobileNumber"
                  // placeholder={ this.state.placeholder }
                  // onMouseEnter={ this.handleHover }
                  // onMouseLeave={ this.handleMouseOut }
                  // value={ data.mobileNumber }
                  // onChange={ this.handleInputChange }
                />
                {/* { this.state.mobileNumberError ? (
                                            <div className="invalid-feedback">{ this.state.mobileNumberError }</div>
                                        ) : null } */}
              </div>
              <div className="col-md-6"></div>
            </div>

            <div className="form-group" style={{marginTop:"1em"}}>
              <div>
              <label>
                {" "}
                Gender <span className="text-danger">*</span>
              </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  style={{ transform: "scale(1.2)", marginLeft: "0.1em" }}
                  name="gender"
                  value="male"
                  // checked={ data.gender === "male" }
                  // onChange={ this.handleInputChange }
                  required
                />
                <label
                  className="form-check-label"
                  htmlFor="male"
                  style={{ marginLeft: "1em" }}
                >
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  style={{ transform: "scale(1.2)", marginLeft: "0.1em" }}
                  name="gender"
                  value="female"
                  // checked={ data.gender === "female" }
                  // onChange={ this.handleInputChange }
                  required
                />

                <label
                  className="form-check-label"
                  htmlFor="female"
                  style={{ marginLeft: "1em" }}
                >
                  Female
                </label>
              </div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="dateofbirth">
                  Date of Birth <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dateofbirth"
                  style={{ color: "gray" }}
                  name="dateOfBirth"
                  // value={ data.dateOfBirth }
                  // onChange={ this.handleInputChange }
                />
              </div>

              <div className="col-md-6"></div>
            </div>

            <div className="form-group" style={{marginTop:"1em"}}>
              <div>
              <label>
                {" "}
                T-Shirt Size <span className="text-danger">*</span>
              </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="s"
                  style={{ transform: "scale(1.2)", marginLeft: "0.1em" }}
                  name="tShirtSize"
                  value="S"
                  // checked={ data.tShirtSize === "S" }
                  // onChange={ this.handleInputChange }
                  required
                />
                <label
                  className="form-check-label" htmlFor="s" style={{ marginLeft: "2em" }}>
                  S
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="m"
                  style={{ transform: "scale(1.2)", marginLeft: "0.8em" }}
                  name="tShirtSize"
                  value="M"
                  // checked={ data.tShirtSize === "M" }
                  // onChange={ this.handleInputChange }
                  required
                />
               <label
                  className="form-check-label" htmlFor="m" style={{ marginLeft: "2em" }}>
                  M
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="l"
                  style={{ transform: "scale(1.2)", marginLeft: "0.1em" }}
                  name="tShirtSize"
                  value="L"
                  // checked={ data.tShirtSize === "L" }
                  // onChange={ this.handleInputChange }
                  required
                />
                <label
                  className="form-check-label" htmlFor="l" style={{ marginLeft: "2em" }}>
                  L
                </label>
              </div>
</div>
<div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="xl"
                  style={{ transform: "scale(1.2)", marginLeft: "0.1em" }}
                  name="tShirtSize"
                  value="XL"
                  // checked={ data.tShirtSize === "XL" }
                  // onChange={ this.handleInputChange }
                  required
                />
               <label
                  className="form-check-label" htmlFor="xl" style={{ marginLeft: "2em" }}>
                  XL
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="xxl"
                  style={{ transform: "scale(1.2)", marginLeft: "0.1em" }}
                  name="tShirtSize"
                  value="XXL"
                  // checked={ data.tShirtSize === "XXL" }
                  // onChange={ this.handleInputChange }
                  required
                />
               <label
                  className="form-check-label" htmlFor="xxl" style={{ marginLeft: "2em" }}>
                  XXL
                </label>
              </div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="bib">
                  Name of the bib <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bib"
                  name="nameOfTheBib"
                  // value={ data.nameOfTheBib }
                  // onChange={ this.handleInputChange }
                  maxLength={16}
                />
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="bloodgroup">
                  BloodGroup <span className="text-danger">*</span>
                </label>
                {/* eslint-disable */}
                <select
                  id="bloodgroup"
                  className=""
                  name="bloodGroup"
                  style={{
                    width: "100%",
                    padding: "0.4em",
                    borderRadius: "7px",
                    outline: "none",
                    border: "1px solid lightgray",
                    color: "gray",
                  }}
                  // value={ data.bloodGroup }
                  // onChange={ this.handleInputChange }
                >
                  <option value="">Please Select</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="emergencycontactname">
                  Emergency Contact Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="emergencycontactname"
                  name="contactName"

                  // value={ data.contactName }
                  // onChange={ this.handleInputChange }
                />
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="emergencycontactnumber">
                  Emergency Contact number{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="emergencycontactnumber"
                  name="contactNumber"
                  // placeholder={ this.state.placeholder }
                  // onMouseEnter={ this.handleHover }
                  // onMouseLeave={ this.handleMouseOut }
                  // value={ data.contactNumber }
                  // onChange={ this.handleInputChange }
                />
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                General Terms & Conditions{" "}
                <span className="text-danger">*</span>
              </div>
              <div className="col-md-6"></div>
            </div>

            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  className="form-check-input"
                  id="acceptedTerms"
                  // checked={ data.acceptedTerms }
                  // onChange={ this.handleInputChange }
                  required
                />

                <label className="form-check-label" htmlFor="acceptedTerms" style={{marginLeft:"0.5em"}}>
                  {" "}
                  Agree to terms and conditions
                </label>
              </div>
              <div className="col-md-6"> </div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <Link to="#">click here</Link> to read the terms & conditions
              </div>
              <div className="col-md-6"> </div>
            </div>

            <div className="d-flex flex-row justify-content-between mx-5 align-items-center">
              <Link to="/event-page" className="btn btn-primary">
                Back
              </Link>
              <img
                width="80px"
                alt=""
                src="https://myraceindia.com/Live_API/assets/jotform/MRTS_Logo_with_Powered_by.png"
              />
              <button className="btn btn-primary" type="submit">
                Signup
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
