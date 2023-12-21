import { lazy } from "react";
import EventsHeader from "../../components/EventsHeader";
import { Styles } from "../../styles/styles";
import FooterEvent from "../../components/FooterEvent";


const ResultsBlock = lazy(()=> import("../../components/ResultsBlock"))

const Events = () => {
  return (
    <>
    <Styles />
    <EventsHeader />
<ResultsBlock />
  <FooterEvent/>
    </>
);
};

export default Events;
