import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 2rem 0.5rem;
background-color:#9F2222;
  .ant-row-space-between {
    align-items: center;
    text-align: center;

  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
    //background-color:#9F2222;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
    //background-color:#9F2222;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
    background-color:#9F2222;
  }

  display: none;

  svg {
    fill: white;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
    
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: white;
  transition: color 0.2s ease-in;
  margin: 0.5rem 1rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
    color: #18216d;
  }
`;


export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

// export const Span = styled("span")`
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover,
//   &:active,
//   &:focus {
//     background-color: #771414;
//     padding:0.3em 0.8em;
//   }
// `;
export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;
export const HeaderSection1 = styled("header")`
  padding: 0rem 0rem;
background-color:white;
display: flex;
 width: 100%;
align-items: center;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
position: sticky;
  top: 0;
  z-index:1;

.ant-row-space-between {
  align-items: center;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  width:100%;

}
`;

export const Flex = styled("div")`

display: flex;
margin-left:auto;
margin-right:auto;
width:80%;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  
  gap:5px;
  width:100%;
  }
`;
export const FlexInline = styled("div")`

display: flex;
gap:20px;
padding:1em;
width:100%;
  @media only screen and (max-width: 768px) {
    display: flex;
  flex-direction: column;
  width:100%;
  gap:5px;
  }
`;
export const Flex1 = styled("div")`

display: flex;
gap:20px;
width:100%;
  @media only screen and (max-width: 768px) {
  }
`;