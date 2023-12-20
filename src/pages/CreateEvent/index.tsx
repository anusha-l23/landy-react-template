import { lazy } from "react";
import EventsHeader from "../../components/EventsHeader";
import { Styles } from "../../styles/styles";
import FooterEvent from "../../components/FooterEvent";

const CreateEvent = lazy(()=> import("../../components/CreateEvent"));

const Events = () => {
  return (
    <>
    <Styles />
    <EventsHeader />
<CreateEvent />
  <FooterEvent/>
    </>
);
};

export default Events;
