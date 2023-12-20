import { Row, Col } from "antd";
//import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";

import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {
  EventSection,
  Content,
  Address,
  Main,
  Heading,
} from "./styles";


interface Event {
  id: number;
  eventName: string;
  location: string;
  year: string;
  eventPicture: string;
}

const ResultsBlock = () => {
  const [events, setEvents] = useState<Event[]>([])
  const fetchData = async()=> {
    const response = await axios.get("http://localhost:3001/santarun/get-results");
    setEvents(response.data);
    console.log(response, "response")
  }
  useEffect(()=>{
fetchData();
  },[])

  return (
    <>
    <div style={{ padding: "0em 5em 5em 5em" }}>
      <Heading>
        <div style={{ fontSize: "150%", fontWeight: "bold" }}>
          Latest Results
        </div>
      </Heading>
      <Main>
        {events.map((item) => {
          return (
            <>
             <Link
        to={{
          pathname: "/registration",
          search: `?event=${encodeURIComponent(item.eventName)}`,
          state: { title: item.eventName },
        }}>
              <EventSection>
                <div>
                {item.eventPicture && typeof item.eventPicture === 'string' && (
                <img src={`http://localhost:3001/${item.eventPicture.replace(/\\/g, '/')}`} width="100%" height="100%" alt="Event" />
                 
                )}
                <Content>{item.eventName}</Content>
                  <Address>
                    <div>{item.location}</div>
                    <div>{item.year.split("T")[0]}</div>
                  </Address>
                  <div style={{ textAlign: "right"}}>
                    <button style={{ border: "none", background: "none" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </EventSection>
              </Link>
            </>
          );
        })}
      </Main>
      {/* <Heading>
        <div style={{ fontSize: "150%", fontWeight: "bold" }}>
          Events
        </div>
      </Heading>
      <Main>
        {data.map((item) => {
          return (
            <>
              <EventSection>
                <div>
                  <img
                    src={item.image}
                    width="100%"
                    height="100%"
                    alt="images"
                  />

                  <Content>{item.title}</Content>
                  <Address>
                    <div>{item.address}</div>
                    <div>{item.date}</div>
                  </Address>
                  <div style={{ textAlign: "right"}}>
                    <button style={{ border: "none", background: "none" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </EventSection>
            </>
          );
        })}
      </Main> */}
    </div>
    </>
  );
};

export default withTranslation()(ResultsBlock);
