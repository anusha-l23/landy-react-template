import { Row, Col } from "antd";
//import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import {useLocation, Link, useParams} from "react-router-dom";
import {format} from "date-fns";

import axios from "axios";
import {useEffect, useState} from "react";
import {
  EventSection,
  Content,
  Address,
  FlexTable,
  Main,
  Flex,
  Circle,
  Box,
  Heading,
  FirstDiv,
  SecondDiv,
} from "./styles";

interface Category {
  name: string;
  amount: string;
}

interface Event {
  id: number;
  eventName: string;
  location: string;
  year: string;
  eventPicture: string;
  categoryDetails: Category[]
}

const EventLanding = () => {
  const location = useLocation();
  const params = useParams();
  const [events, setEvents] = useState<Event[]>([])
  const fetchData = async()=> {
    const response = await axios.get("http://localhost:3001/santarun/get-results");
    setEvents(response.data);
    console.log(response, "response")
  }
  useEffect(()=>{
fetchData();
  },[])



  const buttonStyle = {
    border:"1px solid lightgray",
    borderRadius:"50%",
    backgroundColor:"white",
    paddingLeft:"0.7em",
    paddingRight:"0.7em",
    
  }


  // Function to increment or decrement the selected count

  const [totalCount, setTotalCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [categoryCounts, setCategoryCounts] = useState<{ [key: string]: number }>({});

const handleIncrement = (categoryName: string, amount: number) => {
  setCategoryCounts((prevCounts) => ({
    ...prevCounts,
    [categoryName]: (prevCounts[categoryName] || 0) + 1,
  }));

  setTotalCount((prevTotalCount) => prevTotalCount + 1);
  setTotalAmount((prevTotalAmount) => prevTotalAmount + amount);
};


const handleDecrement = (categoryName: string, amount: number) => {
  if (categoryCounts[categoryName] > 0) {
    setCategoryCounts((prevCounts) => ({
      ...prevCounts,
      [categoryName]: prevCounts[categoryName] - 1,
    }));

    setTotalCount((prevTotalCount) => prevTotalCount - 1);
    setTotalAmount((prevTotalAmount) => prevTotalAmount - amount);
  }
}


  const eventName = new URLSearchParams(location.search).get("event");
  const event = events.find(event => event.eventName === eventName);
  console.log(event, "get event from url");
console.log(event?.categoryDetails,"categoryDetails")
  const dateString: string = event?.year || "";
  let formattedDate: string = "";
  if (dateString) {
  const date: Date = new Date(dateString);

  if (!isNaN(date.getTime())) {
formattedDate = format(date, "MMMM dd, yyyy - EEEE");
  console.log(formattedDate,"formatted")
  }
  else{
    console.log("invalid date string")
  }
}
else{
  console.error('Date string is undefined');
}
  return (
    <>
    
    <div style={{ padding: "4em" }}>
      <FlexTable>
<FirstDiv>
    <table className="table">
  <thead className="thead-dark">
  <tr>
{event && 
      <th scope="col">{event.eventName}</th>
}
    </tr>
    </thead>
    </table>
 
    <table className="table table-bordered" style={{borderBottom:"1px solid lightgray"}}>
  <thead className="thead-light">
    <tr>
      <th scope="col">event</th>
      <th scope="col">Amount (INR)</th>
      <th scope="col">Selected<br/> <span style={{textAlign:"center", color:"red"}}>{totalCount}</span></th>
      <th scope="col" className="text-center">Total Amount <br/> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.725 21L7 14v-2h3.5q1.325 0 2.288-.862T13.95 9H6V7h7.65q-.425-.875-1.263-1.437T10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.563T10.5 14h-.725l6.725 7z"></path></svg> <span style={{textAlign:"center", color:"red"}}>{totalAmount}</span></th>
    </tr>
  </thead>
  <tbody>
    {event?.categoryDetails.map((item)=>{
      return (
        <tr>
        <td>{item.name}</td>
          <td>{item.amount}</td>
          <td>
            <Flex>
              <button style={buttonStyle} onClick={() => handleDecrement(item.name, Number(item.amount))}>-</button>
              <Box>{categoryCounts[item.name] || 0}</Box>
              <button style={buttonStyle} onClick={() => handleIncrement(item.name, Number(item.amount))}>+</button>
            </Flex>
          </td>
          <td><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.725 21L7 14v-2h3.5q1.325 0 2.288-.862T13.95 9H6V7h7.65q-.425-.875-1.263-1.437T10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.563T10.5 14h-.725l6.725 7z"></path></svg> {categoryCounts[item.name] ? categoryCounts[item.name] * Number(item.amount) : 0}</td>
        </tr>
      )
    })}
  </tbody>
</table>
<div className="text-center my-3">
  {event &&
<Link to={{
  pathname: "/registration",
  state: {totalCount:totalCount,
  totalAmount:totalAmount,
  },
  search: `?event=${encodeURIComponent(event.eventName)}`,
  }} className="btn btn-danger px-4 rounded">Register</Link>
}
</div>

    </FirstDiv>
    <SecondDiv>
      {event &&
    <table className="table table-bordered">
  <thead className="thead-dark text-center">
  <tr>
      <th scope="col">Event Details</th>
    </tr>
    </thead>
  <tbody>
    <tr>
      <td>{formattedDate}</td>
      </tr>
      <tr>
      <td>{event.location}</td>
      </tr>
  </tbody>
</table>
}
    </SecondDiv>
    
    </FlexTable>
    <table className="table table-bordered">
  <thead className="thead-dark">
  <tr>
 

<th scope="col">About Event</th>

</tr> 
 
    </thead>
    <tbody>
 <tr>
    <td>
        
        <div>Welcome to the Kakinada Marathon 2024! We're thrilled to announce the next edition of this exciting event, which promises to be bigger and better than ever. Mark your calendars for the 7th of January 2024 as we gather on the stunning NTR Beach Road for a day filled with enthusiasm, camaraderie, and a test of your endurance.</div>
   <div>The Kakinada Marathon is not just a race; it's an experience that celebrates fitness, unity, and the picturesque beauty of Kakinada. Whether you're a seasoned runner or a novice looking for a challenge, this event offers a variety of race categories to suit everyone.</div>
   <div>Race categories:-</div>
   <ol>
    <li>
  Full Marathon (42.195 km): For the most dedicated runners, this is the ultimate test of endurance.</li>
   <li>
Half Marathon (21.097 km): A popular choice for those looking for a significant challenge.</li>
 <li>10K Run Ideal for those who want to push their limits in a more approachable distance.</li>
<li>5K Run Great for families to participate along the beautiful Kakinada Beach.</li>
 <li>3K Fun Run Perfect for beginners and families to enjoy a fun run along the scenic NTR Beach Road.</li>
 </ol>
  <div>Exco Date:- From Date:  6/1/20234To  Date:  6/1/2024.</div>
<div>NTR Beach Road, with its breathtaking sea views and serene atmosphere, provides the perfect backdrop for this marathon. Runners will be treated to a scenic coastal route, and the cool ocean breeze will invigorate and motivate you to conquer your personal best.</div>
<div>
  Registrations Open on 1st October 2023  
</div>
<div>Don't miss out on the opportunity to be a part of this incredible event! Registrations for the Kakinada Marathon 2024 open on 1st October 2023. Check out early bird offers and exciting benefits for those who register early.</div>
<div>
Join us on the 7th of January 2024, and let's run together towards fitness, adventure, and memories that will last a lifetime. We look forward to seeing you at the Kakinada Marathon 2024.
</div>
         </td>
         </tr>
    </tbody>
    </table>
    </div>
    </>
  );
};

export default withTranslation()(EventLanding);
