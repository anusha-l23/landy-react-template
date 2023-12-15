import { Row, Col } from "antd";
//import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {data} from "../../content/EventContent";
import image1 from "../../images/mm23_MRIFPTN.png";
import {
  EventSection,
  Content,
  ContentWrapper,
  Address,
  Main,
  Heading,
} from "./styles";

const EventBlock = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
console.log(data,"data")
  return (
    <div style={{padding:"0em 5em"}}>
    <Heading>
    <div style={{fontSize:"150%", fontWeight:"bold"}}>Latest Results</div>
    <div style={{color:"#9F2222"}}>View More</div>
   </Heading>
    <Main>
      {data.map((item) => {
       
        return(
         <>
      
          <EventSection>
            <div>
        <img src={item.image} width="100%" height="100%" alt="images" />
       
  <ContentWrapper>
  <Content>{item.title}</Content>
    <Address>
 <div>{item.address}</div>
 <div>{item.date}</div>
    </Address>
    <div style={{textAlign:"right"}}>
    <button style={{border:"none", background:"none"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"></path></svg>
    </button>
    </div>
  </ContentWrapper>
  </div>
 </EventSection>
 </>
        )
      })}
    

    </Main>
    <Heading>
    <div style={{fontSize:"150%", fontWeight:"bold"}}>Upcoming Events</div>
    <div style={{color:"#9F2222"}}>View More</div>
   </Heading>
    <Main>
      {data.slice(0,2).map((item) => {
       
        return(
         <>
      
          <EventSection>
            <div>
        <img src={item.image} width="100%" height="100%" alt="images" />
       
  <ContentWrapper>
  <Content>{item.title}</Content>
    <Address>
 <div>{item.address}</div>
 <div>{item.date}</div>
    </Address>
    <div style={{textAlign:"right"}}>
    <button style={{border:"none", background:"none"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"></path></svg>
    </button>
    </div>
  </ContentWrapper>
  </div>
 </EventSection>
 </>
        )
      })}
    

    </Main>
    </div>
  );
};

export default withTranslation()(EventBlock);
