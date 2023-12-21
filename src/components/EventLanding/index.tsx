import { Row, Col } from "antd";
//import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {
  EventSection,
  Content,
  Address,
  Main,
  Flex,
  Circle,
  Box,
  Heading,
} from "./styles";


interface Event {
  id: number;
  eventName: string;
  location: string;
  year: string;
  eventPicture: string;
}

const EventLanding = () => {
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

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [amount1,setAmount1] = useState(0);
  const [amount2,setAmount2] = useState(0);
  const [amount3,setAmount3] = useState(0);
  const [amount4,setAmount4] = useState(0);
  // Function to increment or decrement the selected count
  const increment1 = () => {
    setCount1(count1+1)
    setAmount1(amount1+550);
  }
  const decrement1 = () => {
    if(count1 > 0 && amount1 >0 ){
    setCount1(count1-1)
    setAmount1(amount1-550);
    }
  }

  const increment2 = () => {
    setCount2(count2+1)
    setAmount2(amount2+450)

  }
  const decrement2 = () => {
    if(count2 > 0){
    setCount2(count2-1)
    setAmount2(amount2-450)
    }
  }
  const increment3 = () => {
    setCount3(count3+1)
    setAmount3(amount3+350)
  }
  const decrement3 = () => {
    if(count3 > 0){
    setCount3(count3-1)
    setAmount3(amount3-350)
    }
  }
  const increment4 = () => {
    setCount4(count4+1)
    setAmount4(amount4+250)
  }
  const decrement4 = () => {
    if(count4 > 0){
    setCount4(count4-1);
    setAmount4(amount4-250);
    }
  }
  const totalCount = count1 + count2 + count3 + count4;
  const totalAmount = amount1 + amount2 + amount3 + amount4;

  return (
    <>
    <div style={{ padding: "4em" }}>

    <table className="table">
  <thead className="thead-dark">
  <tr>

      <th scope="col">eventname</th>
    </tr>
    </thead>
    </table>
    <table className="table">
  <thead className="thead">
  <tr>

      <th scope="col" style={{color:"red", fontWeight:"bold"}}>Registrations closing by 25th December 2023</th>
    </tr>
    </thead>
    </table>
    
    <table className="table" style={{borderBottom:"1px solid lightgray"}}>
  <thead className="thead-light">
    <tr>
      <th scope="col">event</th>
      <th scope="col">Amount (INR)</th>
      <th scope="col">Selected<br/> <span style={{textAlign:"center", color:"red"}}>{totalCount}</span></th>
      <th scope="col">Total Amount <br/> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.725 21L7 14v-2h3.5q1.325 0 2.288-.862T13.95 9H6V7h7.65q-.425-.875-1.263-1.437T10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.563T10.5 14h-.725l6.725 7z"></path></svg> <span style={{textAlign:"center", color:"red"}}>{totalAmount}</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>21KM</td>
      <td>550</td>
      <td>
        <Flex>
          <button style={buttonStyle} onClick={decrement1}>-</button>
          <Box>{count1}</Box>
          <button style={buttonStyle} onClick={increment1}>+</button>
        </Flex>
      </td>
      <td><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.725 21L7 14v-2h3.5q1.325 0 2.288-.862T13.95 9H6V7h7.65q-.425-.875-1.263-1.437T10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.563T10.5 14h-.725l6.725 7z"></path></svg> {amount1}</td>
    </tr>
    <tr>
      <td>10KM</td>
      <td>450</td>
      <td>
        <Flex>
        <button style={buttonStyle} onClick={decrement2}>-</button>
          <Box>{count2}</Box>
          <button style={buttonStyle} onClick={increment2}>+</button>
        </Flex>
      </td>
      <td><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.725 21L7 14v-2h3.5q1.325 0 2.288-.862T13.95 9H6V7h7.65q-.425-.875-1.263-1.437T10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.563T10.5 14h-.725l6.725 7z"></path></svg> {amount2}</td>
    </tr>
    <tr>
      <td>05KM</td>
      <td>350</td>
      <td>
        <Flex>
        <button style={buttonStyle} onClick={decrement3}>-</button>
          <Box>{count3}</Box>
          <button style={buttonStyle} onClick={increment3}>+</button>
        </Flex>
      </td>
      <td><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.725 21L7 14v-2h3.5q1.325 0 2.288-.862T13.95 9H6V7h7.65q-.425-.875-1.263-1.437T10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.563T10.5 14h-.725l6.725 7z"></path></svg> {amount3}</td>
    </tr>
    <tr>
      <td>03KM</td>
      <td>250</td>
      <td>
        <Flex>
        <button style={buttonStyle} onClick={decrement4}>-</button>
          <Box>{count4}</Box>
          <button style={buttonStyle} onClick={increment4}>+</button>
        </Flex>
      </td>
      <td><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.725 21L7 14v-2h3.5q1.325 0 2.288-.862T13.95 9H6V7h7.65q-.425-.875-1.263-1.437T10.5 5H6V3h12v2h-3.25q.35.425.625.925T15.8 7H18v2h-2.025q-.2 2.125-1.75 3.563T10.5 14h-.725l6.725 7z"></path></svg> {amount4}</td>
    </tr>
  </tbody>
</table>
<div className="text-center my-3">
<button className="btn btn-danger px-4 rounded">Register</button>
</div>
<table className="table">
  <thead className="thead-dark">
  <tr>
 

<th scope="col">About Event</th>

</tr> 
 
    </thead>
    <tbody>
 
    <td>
        
        <div>Welcome to the Kakinada Marathon 2024! We're thrilled to announce the next edition of this exciting event, which promises to be bigger and better than ever. Mark your calendars for the 7th of January 2024 as we gather on the stunning NTR Beach Road for a day filled with enthusiasm, camaraderie, and a test of your endurance.</div>
   <div>The is not just a race; it's an experience that celebrates fitness, unity, and the picturesque beauty of Kakinada. Whether you're a seasoned runner or a novice looking for a challenge, this event offers a variety of race categories to suit everyone.</div>
         </td>
        
    </tbody>
    </table>
    </div>
    </>
  );
};

export default withTranslation()(EventLanding);
