import { lazy } from "react";
import EventsHeader from "../../components/EventsHeader";
import { Styles } from "../../styles/styles";
import FooterEvent from "../../components/FooterEvent";

const EventBlock = lazy(()=> import("../../components/EventBlock"))

const Events = () => {
  return (
    <>
    <Styles />
    <EventsHeader />
<EventBlock />
  <FooterEvent/>
    </>
);
};

export default Events;