import { lazy } from "react";
import EventsHeader from "../../components/EventsHeader";
import { Styles } from "../../styles/styles";
import FooterEvent from "../../components/FooterEvent";


const EventLanding = lazy(()=> import("../../components/EventLanding"))

const Events = () => {
  return (
    <>
    <Styles />
    <EventsHeader />
<EventLanding />
  <FooterEvent/>
    </>
);
};

export default Events;
