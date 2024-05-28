import React from 'react';
import { ChatHomeWrapper } from './ChatHome.styles';
import { Container } from '../../globalStyles';
import chatImg from '../../assets/images/chat-img.png';
import { ReactComponent as MessageSvg }  from '../../assets/images/message.svg';
import CustomButtom from '../CustomButtom/CustomButtom';
import { color } from '../../assets/css/variable';
import { Link } from 'react-router-dom';

const ChatHome = () => {
    return (
        <ChatHomeWrapper>
            <Container>
                <div className='chat-wrapper'>
                    <img src={chatImg} alt="images-chat" />
                    <Link to={'/ask'}>
                        <CustomButtom className="primary-btn" text={'ask now'} icon={MessageSvg} height={'80px'} background={`${color.secondaryColor}`} color={`${color.greyColor1}`} textVisiableMb={true} />
                    </Link>
                </div>
            </Container>
        </ChatHomeWrapper>
    );
};

export default ChatHome;