import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { Link } from "react-router-dom";
import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const FooterEvent = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      
      <Extra>
        <Container>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "1rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="footer-logo.png"
                  aria-label="homepage"
                  width="130px"
                  height="30px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
             
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "1rem" }}
          >
<Col>
<Chat>
<Link to="#" style={{marginLeft:"0.3em", color:"white"}}>About Us</Link>
<Link to="#" style={{marginLeft:"0.3em", color:"white"}}>Upcoming Events</Link>
<Link to="/results" style={{marginLeft:"0.3em", color:"white"}}>Results</Link>
<Link to="#" style={{marginLeft:"0.3em", color:"white"}}>Contact Us</Link>
</Chat>
<Chat>
<Link to="#" style={{marginLeft:"0.3em", color:"white"}}>Terms & Conditions</Link>
<Link to="#" style={{marginLeft:"0.3em", color:"white"}}>Privacy Policy</Link>
<Link to="#" style={{marginLeft:"0.3em", color:"white"}}>Cancellation Policy</Link>
</Chat>
</Col>
<Col>
©2023 My Race India. All rights reserved.
</Col>
            </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(FooterEvent);
