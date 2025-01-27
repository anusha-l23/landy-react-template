import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import RaceTiming from "../../content/RaceTiming.json";
import Scoring from "../../content/Scoring.json";
import Participant from "../../content/Participant.json";
import Footer from "../../components/Footer";
import { Styles } from "../../styles/styles";
import Header from "../../components/Header";
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const IntroBlock = lazy(()=> import("../../components/IntroBlock"))

// /const IntroBlock = lazy(() => import("../../components/IntroBlock"));
const Home = () => {
  return (
    <>
    <Container>
      <Styles />
      <Header />
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="home.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        //content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      {/* <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="graphs.svg"
        id="about"
      /> */}
      {/* <IntroBlock
        direction="right"
       // title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      /> */}
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="contact.svg"
        id="registration"
      />
      <ContentBlock
        direction="right"
        title={RaceTiming.title}
        content={RaceTiming.text}
        icon="racetime.svg"
        id=""
      />
      <ContentBlock
        direction="left"
        title={Scoring.title}
        content={Scoring.text}
        icon="2000RESULTRESIZE.svg"
        id=""
      />
<ContentBlock
        direction="right"
        title={Participant.title}
        content={Participant.text}
        icon="commu.svg"
        id=""
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
    <Footer />
    </>
  );
};

export default Home;
