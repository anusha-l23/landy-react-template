import { Row } from "antd";
import styled from "styled-components";

export const Main = styled("section")`
display:flex;
gap:0px;
flex-wrap:wrap;
align-items:center;
@media only screen and (max-width: 575px) {
  display: flex;
  flex-direction: column;

}
`;

export const Heading = styled("section")`
display:flex;
justify-content: space-between;
margin-top:3em;
margin-bottom:1em;
position: relative;
padding:0em 2em;

@media only screen and (max-width: 575px) {
  padding: 0em 0em 1em 0em;
}
`;
export const Img = styled("section")`
text-align:center;
`;

export const EventSection = styled("section")`

position: relative;
box-sizing: border-box;
width:315px;
padding: 20px;
height:315px;
border: 0px solid #ccc;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
margin:0.4em;

`;
export const Content = styled("p")`
font-Size:100%;
position: relative;
margin-top:0.2em;
height:2em;

// @media only screen and (max-width: 1024px) {
//   padding: 4rem 0 4rem;
// }
`;
export const Address = styled("p")`
display:flex;
font-Size:90%;
margin-top:0.2em;
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
