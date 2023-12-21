const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/", "/events"],
    exact: true,
    component: "Events",
  },
  {
    path: ["/", "/results"],
    exact: true,
    component: "Results",
  },
  {
    path: ["/", "/registration"],
    exact: true,
    component: "Registration",
  },
  {
    path: ["/", "/createevent"],
    exact: true,
    component: "CreateEvent",
  },
  {
    path: ["/", "/eventlanding"],
    exact: true,
    component: "EventLanding",
  },
];

export default routes;
