import { lazy } from "react";
import EventsHeader from "../../components/EventsHeader";
import { Styles } from "../../styles/styles";

const EventBlock = lazy(()=> import("../../components/EventBlock"))

const Events = () => {
  return (
    <>
    <Styles />
    <EventsHeader />
  <EventBlock />
    </>
);
};

export default Events;
