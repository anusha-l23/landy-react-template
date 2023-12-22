import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {Container, Row,Col} from "reactstrap";
import {useFormik} from "formik";
import { FormFeedback, Input } from 'reactstrap';
import * as Yup from 'yup';
import axios from "axios";

interface Event {
  id: number;
  eventName: string;
  location: string;
  year: string;
  eventPicture: string;
  categoryName: string;
  categoryAmount: number;
}

const Registration = () => {
    const location = useLocation();
//   const totalCount = location.state?.totalCount;
// const totalAmount = location.state?.totalAmount;
// const eventName = new URLSearchParams(location.search).get("event");
// console.log(totalCount, totalAmount, eventName, "total")



const [events, setEvents] = useState<Event[]>([])
const [placeholder, setPlaceholder] = useState('##########');
const handleHover = () => {
  setPlaceholder('----------');
};

const handleMouseOut = () => {
  setPlaceholder('##########');
};
const fetchData = async()=> {
  const response = await axios.get("http://localhost:3001/santarun/get-results");
  setEvents(response.data);
  console.log(response, "response")
}
useEffect(()=>{
fetchData();
},[])

const IndianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
];
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Côte d\'Ivoire',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo (Congo-Brazzaville)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czechia (Czech Republic)',
  'Democratic Republic of the Congo',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini (fmr. "Swaziland")',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Holy See',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar (formerly Burma)',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine State',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const searchParams = new URLSearchParams(location.search);

const eventname = searchParams.get('event')

const findEvent = events.find(event => event && event.eventName === eventname)

console.log(findEvent, "find")

useEffect(()=>{
  const eventId = findEvent ? findEvent.id : null;
  formik.setFieldValue('eventId', eventId);
}, [findEvent]); // Add dependencies as needed

const formik = useFormik({
  initialValues: {
firstName: '',
lastName: '',
email: '',
mobileNumber:"",
gender:"",
dateOfBirth:"",
tShirtSize:"",
nameOfTheBib:"",
bloodGroup:"",
contactName:"",
contactNumber:"",
street:"",
city:"",
pincode:"",
state:"",
country:"",
personStatus:"",
acceptedTerms:false,

  },
  validationSchema: Yup.object({
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    email: Yup.string().email('Invalid email').required('This field is required'),
    mobileNumber: Yup.string()
.required('This field is required'),
gender: Yup.string().required('This field is required'),
dateOfBirth: Yup.date()
.max(new Date(), 'Date of birth must be in the past') 
.required('This field is required'),
tShirtSize: Yup.string().required('This field is required'),
nameOfTheBib:Yup.string().required('This field is required'),
bloodGroup:Yup.string().required('This field is required'),
contactName: Yup.string().required('This field is required'),
contactNumber: Yup.string().required('This field is required'),
street: Yup.string().required('This field is required'),
city: Yup.string().required('This field is required'),
pincode: Yup.string().required('This field is required'),
state: Yup.string().required('This field is required'),
country: Yup.string().required('This field is required'),
personStatus: Yup.string().required('This field is required'),
acceptedTerms:Yup.boolean().required('This field is required'),
  }),

  onSubmit: async(values) => {
    try {

      await axios.post('http://localhost:3001/santarun/register', values);

      console.log('Registration successful!');
    } catch (error) {
      // Handle error (show an error message, log the error, etc.)
 
    }
  },
});

  return (
    <div style={{backgroundColor:"#F1F1F1", padding:"3em 10em 3em 10em"}}>
      <div style={{backgroundColor:"white", border:"1px solid lightgray"}}>
      {/* <div style={{borderBottom:"2px solid yellow", padding:"1em"}}>
<Container>
  <Row>
    <Col>
    <div style={{borderLeft:"2px solid yellow", padding:"1em"}}>{eventName}</div>

    </Col>
    <Col>
    <div style={{borderLeft:"2px solid yellow", padding:"1em"}}>{totalCount} SELECTED </div></Col>
    <Col>
    <div style={{borderLeft:"2px solid yellow", padding:"1em"}}>
    {totalAmount}/- (REGISTRATION FEE)
    </div>
    </Col>
  </Row>
</Container>

      </div> */}
      <Form onSubmit={(e)=>{
        e.preventDefault()
        formik.handleSubmit();
        return false;
        }}>
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName || ""}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                  <FormFeedback type="invalid"><div>{formik.errors.firstName}</div></FormFeedback>
                  ) : null}

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
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                  <FormFeedback type="invalid"><div>{formik.errors.lastName}</div></FormFeedback>
                  ) : null}

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
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email || ""}
                                           
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                            <FormFeedback type="invalid"><div>{formik.errors.email}</div></FormFeedback>
                                            ) : null}
                
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
                  placeholder={placeholder}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseOut}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobileNumber || ""}
                
                  />
                  {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                  <FormFeedback type="invalid"><div>{formik.errors.mobileNumber}</div></FormFeedback>
                  ) : null}
                  {formik.values.mobileNumber.startsWith(String(0)) && 
                  <div className='text-danger font-weight-bold'>Do Not start with 0</div>
                  }
              </div>
              <div className="col-md-6"></div>
            </div>

            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="street">
                  Street <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  name="street"
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.street || ""}
                                           
                                            />
                                            {formik.touched.street && formik.errors.street ? (
                                            <FormFeedback type="invalid"><div>{formik.errors.street}</div></FormFeedback>
                                            ) : null}
                
              </div>

              <div className="col-md-6"></div>
            </div>

            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="city">
                  City <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.city || ""}
                                           
                                            />
                                            {formik.touched.city && formik.errors.city ? (
                                            <FormFeedback type="invalid"><div>{formik.errors.city}</div></FormFeedback>
                                            ) : null}
                
              </div>

              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="pincode">
                  Pincode <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.pincode || ""}
                                            
                                            />
                                            {formik.touched.pincode && formik.errors.pincode ? (
                                            <FormFeedback type="invalid"><div>{formik.errors.pincode}</div></FormFeedback>
                                            ) : null}
                
              </div>

              <div className="col-md-6"></div>
            </div>

            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="state">
                  State <span className="text-danger">*</span>
                </label>
                {/* eslint-disable */}
                <select
                  id="state"
                  className=""
                  name="state"
                  style={{
                    width: "100%",
                    padding: "0.4em",
                    borderRadius: "7px",
                    outline: "none",
                    border: "1px solid lightgray",
                    color: "gray",
                  }}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.state || ""}
                 
                >
                  {formik.touched.state && formik.errors.state ? (
                    <FormFeedback type="invalid"><div>{formik.errors.state}</div></FormFeedback>
                  ) : null}
                  <option value="">Please Select</option>
                  {IndianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
                </select>
              </div>
              <div className="col-md-6"></div>
            </div>

            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="country">
                  Country <span className="text-danger">*</span>
                </label>
                {/* eslint-disable */}
                <select
                  id="country"
                  className=""
                  name="country"
                  style={{
                    width: "100%",
                    padding: "0.4em",
                    borderRadius: "7px",
                    outline: "none",
                    border: "1px solid lightgray",
                    color: "gray",
                  }}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.country || ""}
                
                >
                  {formik.touched.country && formik.errors.country ? (
                    <FormFeedback type="invalid"><div>{formik.errors.country}</div></FormFeedback>
                  ) : null}
                  <option value="">Please Select</option>
                  {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
                </select>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="form-group" style={{marginTop:"1em"}}>
              <div>
              <label>
                {" "}
                Are you a student in any college or employee of any company?
              </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="student"
                  style={{ transform: "scale(1.2)", marginLeft: "0.1em" }}
                  name="personStatus"
                  value="student"
                  checked={formik.values.personStatus ==="student"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                  required
                />
                <label
                  className="form-check-label"
                  htmlFor="student"
                  style={{ marginLeft: "1em" }}
                >
                  Student
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="employee"
                  style={{ transform: "scale(1.2)", marginLeft: "0.1em" }}
                  name="personStatus"
                  value="employee"
                  checked={ formik.values.personStatus === "employee" }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                  required
                />

                <label
                  className="form-check-label"
                  htmlFor="employee"
                  style={{ marginLeft: "1em" }}
                >
                  Employee
                </label>
              </div>
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
                  checked={formik.values.gender ==="male"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
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
                  checked={ formik.values.gender === "female" }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth || ""}
                  
                  />
                  {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                  <FormFeedback type="invalid"><div>{formik.errors.dateOfBirth}</div></FormFeedback>
                  ) : null}
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
                  checked={ formik.values.tShirtSize === "S" }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
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
                  checked={ formik.values.tShirtSize === "M" }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
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
                  checked={ formik.values.tShirtSize === "L" }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
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
                  checked={ formik.values.tShirtSize === "XL" }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
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
                  checked={ formik.values.tShirtSize === "XXL" }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
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
                  Name on the bib <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bib"
                  name="nameOfTheBib"
             
                  maxLength={16}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.nameOfTheBib || ""}
                 
                
                />
                {formik.touched.nameOfTheBib && formik.errors.nameOfTheBib ? (
                  <FormFeedback type="invalid"><div>{formik.errors.nameOfTheBib}</div></FormFeedback>
                ) : null}

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
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.bloodGroup || ""}
                  
                >
                  {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                    <FormFeedback type="invalid"><div>{formik.errors.bloodGroup}</div></FormFeedback>
                  ) : null}
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.contactName || ""}
                 
                />
                {formik.touched.contactName && formik.errors.contactName ? (
                  <FormFeedback type="invalid"><div>{formik.errors.contactName}</div></FormFeedback>
                ) : null}
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  placeholder={placeholder}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseOut}
                  value={formik.values.contactNumber || ""}
                 
                />
                {(formik.values.contactNumber.startsWith(String(91)) || formik.values.contactNumber.startsWith(String(91))) &&
                  <div className='text-sm mt-2'>DO NOT start with 91 or 0</div>}
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <FormFeedback type="invalid"><div>{formik.errors.contactNumber}</div></FormFeedback>
                ) : null}
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
              <Input
                type="checkbox"
                name="acceptedTerms"
                className="form-check-input"
                id="acceptedTerms"
                checked={formik.values.acceptedTerms}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => formik.handleChange(e)}
                required
              />
              {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? (
                <FormFeedback type="invalid"><div>{formik.errors.acceptedTerms}</div></FormFeedback>
              ) : null}

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

            <div className="d-flex flex-row justify-content-between mx-5 my-3 align-items-center">
              {/* <Link to="/event-page" className="btn btn-primary">
                Back
              </Link>
              <img
                width="80px"
                alt=""
                src="https://myraceindia.com/Live_API/assets/jotform/MRTS_Logo_with_Powered_by.png"
              /> */}
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
