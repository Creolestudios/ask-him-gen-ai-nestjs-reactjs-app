import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from './Header.styles';
import { Container } from '../../globalStyles';
import logo from "../../assets/images/logo.svg";
import MenuList from '../MenuList/MenuList';
import { menu_List } from '../../constant';
import CustomButtom from '../CustomButtom/CustomButtom';
import { ReactComponent as MessageSvg }  from '../../assets/images/message.svg';
import { Link } from 'react-router-dom';
import { color } from '../../assets/css/variable';

const Header = () => {

    const [windowWidth, setWindowWidth] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const windowWidthFunc = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', windowWidthFunc);
        return () => {
            window.removeEventListener('resize', windowWidthFunc);
        }
    },[windowWidth]);


    return (
        <HeaderWrapper className={`${open ? 'open' : ''}`}>
            <Container className='container'>
                <div className='header-wrapper'>
                    <Link to={'/'}>
                        <img className='logo' src={logo} alt="logo" width={'142px'} height={'70px'} />
                    </Link> 
                    <div className={`humberger-menu ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                        <span></span>
                    </div>
                    <div className={`header-right ${windowWidth < 768 ? 'mobile-menu' : ''} ${open ? 'open' : ''}`}>
                        <MenuList list={menu_List} windowWidth={windowWidth} setOpen={setOpen} />
                        <Link to={'/ask'} onClick={() => setOpen(!open)}>
                            <CustomButtom className="btn" text={'ask now'} icon={MessageSvg} height={'48px'} background={`${color.secondaryColor}`} color={`${color.greyColor1}`} textVisiableMb={true} />
                        </Link>
                    </div>
                </div>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;