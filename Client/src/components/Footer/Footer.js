import React from 'react';
import { FooterWrapper } from './Footer.styles';
import { Container } from '../../globalStyles';
import logo from '../../assets/images/logo.svg';
import MenuList from '../MenuList/MenuList';
import { footer_menu_List } from '../../constant';
import { Link } from 'react-router-dom';
import linkedin from '../../assets/images/linkedin.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import footerBottom from '../../assets/images/footer-bottom.png';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className='footer-content'>
          <div className='footer-top'>
            <img className='logo' src={logo} alt='images' />
            <div className='footer-top-right'>
              <MenuList list={footer_menu_List} />
              <div className='social-wrapper'>
                <div className='title'>Follow us</div>
                <ul className='social'>
                  <li>
                    <Link>
                      <img src={linkedin} alt='linkedin' />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={facebook} alt='facebook' />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={instagram} alt='instagram' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>2023 ©All right reserved</p>
            <Link to={'https://www.creolestudios.com/'} target='_blank'>
              <img src={footerBottom} alt='footer-bottom-img' />
            </Link>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
