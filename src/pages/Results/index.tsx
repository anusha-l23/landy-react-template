import { lazy } from "react";
import EventsHeader from "../../components/EventsHeader";
import { Styles } from "../../styles/styles";
import FooterEvent from "../../components/FooterEvent";
import {useState, useEffect} from "react";
import axios from "axios";
const ResultsBlock = lazy(()=> import("../../components/ResultsBlock"))

const Results = () => {


  return (
    <>
    <Styles />
    <EventsHeader />
  {/* <ResultsBlock id="results"/> */}
  <ResultsBlock />
  <FooterEvent/>
    </>
);
};

export default Results;
