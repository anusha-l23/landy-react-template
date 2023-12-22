
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [year, setYear] = useState('');
  const [categoryName, setCategoryName] = useState("");
  const [categoryAmount, setCategoryAmount] = useState(0);
  const [eventPicture, setEventPicture] = useState("");
  const [toggleCategory, setToggleCategory] = useState(false)
const handleFileChange = (event:any) => {
  setEventPicture(event.target.files[0])
}

const handleAmountChange = (e:any) => {
  const inputAmount = e.target.value;

  if (!isNaN(inputAmount)) {
    setCategoryAmount(parseInt(inputAmount, 10)); 
  }

};
const toggleButton = () => {
  if (toggleCategory) {
    setCategoryName(""); 
    setCategoryAmount(0); 
  }
  setToggleCategory((prevState) => !prevState);
}

const handleSubmit = async (event:any)=>{
event.preventDefault();
try {
  const formData = new FormData();
  formData.append('eventName', eventName);
      formData.append('location', location);
      formData.append('year', year);
      formData.append('categoryName', categoryName);
      formData.append('categoryAmount', categoryAmount.toString());
      formData.append('eventPicture', eventPicture);

       await axios.post("http://localhost:3001/santarun/create-event", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
  console.error(error)
  throw new Error("Failed in event creation");;
}
}
  return (

    <div style={{margin:"2em"}}>
    
      <div>
        <Form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="eventname">
                  Event Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="eventname"
                  name="eventname"
                  value={ eventName }
                  onChange={(e)=>setEventName(e.target.value) }
                />
              </div>

              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="location">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={ location }
                  onChange={(e)=>setLocation(e.target.value) }
                />
              </div>

              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="year">
                  Year
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="year"
                  name="year"
                  value={ year }
                  onChange={(e)=>setYear(e.target.value) }
                />
              </div>

              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{marginTop:"1em"}}>
            <div className="col-md-6">
              <button onClick={toggleButton}>Add Category</button>
            </div>
            <div className="col-md-6"></div>
            </div>
            {toggleCategory && 
            <>
            <div className="row" style={{marginTop:"1em"}}>
            <div className="col-md-6">
            <label htmlFor="categoryname">
                  Category Name
                </label>
            <input
                  type="text"
                  className="form-control"
                  id="categoryname"
                  name="categoryname"
                  value={ categoryName }
                  onChange={(e)=>setCategoryName(e.target.value) }
                />
            </div>
            <div className="col-md-6"></div>
            </div>
     <div className="row" style={{marginTop:"1em"}}>
           
     <div className="col-md-6">
     <label htmlFor="categoryamount">
           Category Amount
         </label>
     <input
           type="text"
           className="form-control"
           id="categoryamount"
           name="categoryamount"
           value={ categoryAmount }
           onChange={handleAmountChange}
         />
     </div>
     </div>
     </>
            }      

            <div className="row" style={{marginTop:"1em"}}>
              <div className="col-md-6">
                <label htmlFor="eventpicture">
                  Event Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="eventpicture"
                  name="eventpicture"
                  // value={ eventPicture }
                  onChange={handleFileChange }
                />
                
              </div>

              <div className="col-md-6"></div>
            </div>
            <div style={{textAlign:"center", marginTop:"1em"}}>
             
              <button className="btn btn-primary" type="submit">
                Create Event
              </button>
            </div>
          </div>
        </Form>
     
      </div>
    </div>
  );
};

export default CreateEvent;
