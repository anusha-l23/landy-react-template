import { lazy } from "react";
import EventsHeader from "../../components/EventsHeader";
import { Styles } from "../../styles/styles";
import FooterEvent from "../../components/FooterEvent";


const ResultsBlock = lazy(()=> import("../../components/ResultsBlock"))

const Results = () => {
  return (
    <>
    <Styles />
    <EventsHeader />
  <ResultsBlock id="results"/>
  <FooterEvent/>
    </>
);
};

export default Results;
