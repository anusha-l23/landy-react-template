import { lazy } from "react";
import EventsHeader from "../../components/EventsHeader";
import { Styles } from "../../styles/styles";
import FooterEvent from "../../components/FooterEvent";

const RegistrationForm = lazy(()=> import("../../components/Registration"))

const Registration = () => {
  return (
    <> 
     <Styles />
    <EventsHeader />
    <RegistrationForm />
  <FooterEvent/>

    </>
);
};

export default Registration;
