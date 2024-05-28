import React from "react";
import { ContactWrapper } from "./Contact.styles";
import { Container, HeadingTitle } from "../../globalStyles";
import BannerAdd from "../../components/BannerAdd/BannerAdd";
import linkedin from '../../assets/images/linkedin-fill.svg';
import facebook from '../../assets/images/facebook-fill.svg';
import instagram from '../../assets/images/instagram-fill.svg';
import { Link } from "react-router-dom";
import ConatctForm from "../../components/ConatctForm/ConatctForm";

const Contact = () => {
  return (
    <ContactWrapper>
      <BannerAdd />
      <Container>
        <div className="contact-wrapper">
          <div className="left">
            <HeadingTitle className="title">Get in touch</HeadingTitle>
            <p className="extra-large-body">
              Lorem ipsum dolor sit amet consectetur. Lobortis nulla metus
              aenean dis dolor ipsum. Imperdiet volutpat sed sit at pharetra
              gravida varius sed. Amet donec id consequat facilisi non cursus
              enim. Non ut adipiscing at massa. Tempus morbi viverra eu augue
              placerat integer. Tortor malesuada libero nunc dolor nunc. Risus
              viverra sed aliquet libero. Sit augue purus vitae ut amet neque id
              nulla. Tempor id enim sit vestibulum libero elementum aliquet.
              Tincidunt proin tortor commodo elementum turpis. Facilisi turpis
              urna lacinia in.
            </p>
            <div className="social-wrapper">
              <div className="block">
                <label>PO BOX:</label>
                <span>167893</span>
              </div>
              <div className="block">
                {/* <lable>PO BOX:</lable> */}
                <span>Irving, TX 75016</span>
              </div>
              <ul className="social">
                <li>
                  <Link>
                    <img src={linkedin} alt="linkedin" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={facebook} alt="facebook" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={instagram} alt="instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <ConatctForm />
          </div>
        </div>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
