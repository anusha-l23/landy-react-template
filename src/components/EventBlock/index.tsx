import { Row, Col } from "antd";
//import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { data } from "../../content/EventContent";
import image1 from "../../images/event-home.png";
import { Link } from "react-router-dom";
import {
  EventSection,
  Content,
  ContentWrapper,
  Address,
  Img,
  Main,
  Heading,
} from "./styles";

const EventBlock = () => {

  console.log(data, "data");
  return (
    <>
    <Img>
      <img src={image1} alt="images" style={{width:"100vw"}} />
      </Img>
    <div style={{ padding: "0em 5em", marginBottom:"2em" }}>
      <Heading>
        <div style={{ fontSize: "150%", fontWeight: "bold" }}>
          Latest Results
        </div>
        <Link to="/results" style={{ color: "#9F2222" }}>View More</Link>
      </Heading>
      <Main>
        {data.slice(0,4).map((item) => {
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
      </Main>
      <Heading>
        <div style={{ fontSize: "150%", fontWeight: "bold" }}>
          Upcoming Results
        </div>
        <div style={{ color: "#9F2222" }}>View More</div>
      </Heading>
      <Main>
        {data.slice(0,2).map((item) => {
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
                  <div style={{ textAlign: "right" }}>
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
      </Main>
    </div>
    </>
  );
};

export default withTranslation()(EventBlock);
