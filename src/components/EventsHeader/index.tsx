import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Link, useLocation } from "react-router-dom";

import {
  HeaderSection,
  HeaderSection1,
  
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  FlexInline,
  CustomNavLinkSmall,
  Label,
  Outline,
  Flex,
  Span,
} from "./styles";
const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };
  const location = useLocation();
  const { title }: { title?: string } = location.state || {}
  const [inputValues, setInputValues] = useState({title: title|| ""})
  const handleInputChange = (event: any) => {
    const {name, value} = event.target;
    setInputValues({
      ...inputValues,
      [name]: value
    })
  }
  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => {}}>
          <Span>{t("About Us")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => {}}>
          <Span>{t("Calender")}</Span>
          </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => {}}>
        <Link style={{color:"white"}} to="/results">
          <Span>{t("Results")}</Span>
          </Link>
        </CustomNavLinkSmall>
      
      </>
    );
  };

  const inputStyle = {
    borderBottom: '1px solid #9f1d21', // Specific border style
   
    padding: '0em 10em 0em 1em',
    borderTop: 'none', // Remove top border
    borderLeft: 'none', // Remove left border
    borderRight: 'none',
    '&:focus': {
      borderTop: '0', // Remove top border on focus
      borderRight: '0', // Remove right border on focus
      borderLeft: '0', // Remove left border on focus
    },
  };
  
  const selectdiv = {
    fontSize: "13px",
    padding: "1em",
    color: "#000",
    marginTop:"0em",
    borderBottom: '1px solid #9f1d21', 
    borderTop: 'none', // Remove top border
    borderLeft: 'none', // Remove left border
    borderRight: 'none',
    backgroundColor: "#fff",
   
}
  return (
    <>
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  <HeaderSection1>
  <Flex>
<FlexInline>
            <select style={selectdiv}>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              </select>
         
<input style={inputStyle} name={title} value={inputValues.title} onChange={handleInputChange} placeholder="Enter your event name" />
<input style={inputStyle} placeholder="Enter your BIB# or Name" />

</FlexInline>
<button style={{backgroundColor: '#9f1d21', border:"none", padding: '0em 1.5em 0em 1.5em', color:"white", fontWeight:"bold"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></path></svg>
</button>
</Flex>
</HeaderSection1>
</>
  );
};

export default withTranslation()(Header);
