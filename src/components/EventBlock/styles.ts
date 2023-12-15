import { Row } from "antd";
import styled from "styled-components";

export const Main = styled("section")`
display:flex;
gap:10px;

`;

export const Heading = styled("section")`
display:flex;
justify-content: space-between;
margin-top:4em;
position: relative;
padding:0em 2em;


@media only screen and (max-width: 1024px) {
  padding: 4rem 0 4rem;
}
`;

export const EventSection = styled("section")`

position: relative;
padding: 10rem 0 8rem;
box-sizing: border-box;
width:290px;
padding: 20px;
height:290px;
border: 0px solid #ccc;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
margin:2em;

`;
export const Content = styled("p")`
font-Size:110%;
position: relative;
height:2em;

@media only screen and (max-width: 1024px) {
  padding: 4rem 0 4rem;
}

`;
export const Address = styled("p")`
display:flex;
font-Size:90%;
height:1em;
justify-content:space-between;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
