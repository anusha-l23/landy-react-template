import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Flex } from "./styles";

interface Category {
  name: string;
  amount: string;
}

const CreateEvent = () => {
  const history = useHistory();
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [aboutEvent, setAboutEvent] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [regOpenDate, setRegOpenDate] = useState(new Date());
  const [regCloseDate, setRegCloseDate] = useState(new Date());
  const [tag, setTag] = useState("");
  //const [year, setYear] = useState('');
  const [year, setYear] = useState(new Date());

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [eventPicture, setEventPicture] = useState("");
  const [categories, setCategories] = useState<Category[]>([
    { name: "", amount: "" },
  ]);
  const [showCategories, setShowCategories] = useState(false);

  const handleDayChange = (date: any) => {
    setYear(date);
  };

  const handleRegOpenDayChange = (date: any) => {
    setRegOpenDate(date);
  };
  const handleRegCloseDayChange = (date: any) => {
    setRegCloseDate(date);
  };

  // const handleYearChange = (date: any) => {
  //   setSelectedYear(date.getFullYear());
  // };

  // const selectedDate = new Date(selectedYear, year.getMonth(), year.getDate());

  const handleFileChange = (event: any) => {
    setEventPicture(event.target.files[0]);
  };

  const handleCategoryChange = (
    index: number,
    key: keyof Category,
    value: string
  ) => {
    const updatedCategories = [...categories];
    updatedCategories[index][key] = value;
    setCategories(updatedCategories);
  };

  const addCategoryInput = () => {
    const newCategory = { id: generateUniqueId(), name: "", amount: "" };
    setCategories([...categories, newCategory]);
  };
  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  const removeCategory = (index: number) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };
  const showInputs = () => {
    setShowCategories(true);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("eventName", eventName);
      formData.append("location", location);
      formData.append("aboutEvent", aboutEvent);
      formData.append("orgEmail", orgEmail);
      formData.append("contactNum", contactNum);
      formData.append("regOpenDate", regOpenDate.toISOString());
      formData.append("regCloseDate", regCloseDate.toISOString());
      formData.append("tag", tag);
      //formData.append('year', year);
      formData.append("year", year.toISOString());

      formData.append("eventPicture", eventPicture);
      categories.forEach((category, index) => {
        formData.append(`categoryDetails[${index}][name]`, category.name);
        formData.append(`categoryDetails[${index}][amount]`, category.amount);
      });

      console.log(formData, "formData");

      await axios.post(
        "http://localhost:3001/santarun/create-event",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      history.push("/events");
    } catch (error) {
      console.error(error);
      throw new Error("Failed in event creation");
    }
  };
  return (
    <div style={{ margin: "2em" }}>
      <div>
        <div className="container">
          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col-md-6">
              <label htmlFor="eventname">Event Name</label>
              <input
                type="text"
                className="form-control"
                id="eventname"
                name="eventname"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>

            <div className="col-md-6"></div>
          </div>
          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col-md-6">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="col-md-6"></div>
          </div>
          <Flex>
            <label htmlFor="year">Year</label>

            <DatePicker
              className="form-control"
              selected={year}
              onChange={handleDayChange}
              dateFormat="MMMM d, yyyy"
            />
          </Flex>

          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col-md-6">
              <label htmlFor="eventpicture">Event Picture</label>
              <input
                type="file"
                className="form-control"
                id="eventpicture"
                name="eventpicture"
                // value={ eventPicture }
                onChange={handleFileChange}
              />
            </div>

            <div className="col-md-6"></div>
          </div>
          <div>
            <div className="row" style={{ marginTop: "1em" }}>
              <div className="col-md-6">
                {!showCategories && (
                  <button type="button" onClick={showInputs}>
                    Add Category
                  </button>
                )}
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{ marginTop: "1em" }}>
              <div className="col-md-6">
                {showCategories && (
                  <button type="button" onClick={addCategoryInput}>
                    Add Category
                  </button>
                )}
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row" style={{ marginTop: "1em" }}>
              <div className="col-md-6">
                {showCategories &&
                  categories.map((category, index) => (
                    <div key={index}>
                      <div className="row" style={{ marginTop: "1em" }}>
                        <div className="col-md-4">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            value={category.name}
                            onChange={(e) =>
                              handleCategoryChange(
                                index,
                                "name",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Amount </label>
                          <input
                            type="text"
                            className="form-control"
                            value={category.amount}
                            onChange={(e) =>
                              handleCategoryChange(
                                index,
                                "amount",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div style={{ marginTop: "2em" }}>
                          <button
                            type="button"
                            className="form-control"
                            onClick={() => removeCategory(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "0em" }}>
            <div className="col-md-6">
              <label htmlFor="aboutevent">About Event</label>
              <textarea
                className="form-control"
                id="aboutevent"
                name="aboutEvent"
                value={aboutEvent}
                onChange={(e) => setAboutEvent(e.target.value)}
                rows={4}
              />
            </div>

            <div className="col-md-6"></div>
          </div>
          <Flex>
            <label htmlFor="regopendate">registartion open date and time</label>

            <DatePicker
              className="form-control"
              selected={regOpenDate}
              onChange={handleRegOpenDayChange}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </Flex>
          <Flex>
            <label htmlFor="regclosedate">
              registartion close date and time
            </label>

            <DatePicker
              className="form-control"
              selected={regCloseDate}
              onChange={handleRegCloseDayChange}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </Flex>

          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col-md-6">
              <label htmlFor="orgemail">Organizer Email</label>
              <input
                type="email"
                className="form-control"
                id="orgemail"
                name="orgEmail"
                value={orgEmail}
                onChange={(e) => setOrgEmail(e.target.value)}
              />
            </div>

            <div className="col-md-6"></div>
          </div>
          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col-md-6">
              {orgEmail && !orgEmail.includes("@") && (
                <div className="text-danger">Email should contain @</div>
              )}
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col-md-6">
              <label htmlFor="conatctnum">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="conatctnum"
                name="conatctNum"
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
              />
            </div>

            <div className="col-md-6"></div>
          </div>

          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col-md-6">
              <label htmlFor="eventtag">Event Tag</label>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row" style={{ marginTop: "1em" }}>
            <div className="col-md-6">
              <select
                className="form-control"
                id="eventtag"
                name="eventtag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              >
                <option value="">Select a tag</option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Fast Filling">Fast Filling</option>
              </select>
            </div>
            <div className="col-md-6"></div>
          </div>

          <div style={{ textAlign: "center", marginTop: "1em" }}>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
