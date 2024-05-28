import React from 'react';
import { AskWrapper } from './Ask.styles';
// import BannerAdd from '../../components/BannerAdd/BannerAdd';
// import PostAdd from '../../components/PostAdd/PostAdd';
import { Container } from '../../globalStyles';
import ChatAsk from '../../components/ChatAsk/ChatAsk';
// import GoogleAdsenseHorizontal from '../../components/GoogleAdsense/GoogleAdsenseHorizontal';
// import { BannerAddWrapper } from '../../components/BannerAdd/BannerAdd.styles';
// import GoogleAdsenseSquare from '../../components/GoogleAdsense/GoogleAdsenseSquare';
// import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const Ask = () => {
  return (
    <AskWrapper>
      {/* <ErrorBoundary>
        <BannerAddWrapper>
          <GoogleAdsenseHorizontal
            dataAdSlot={"5427598878"}
            clientId={"ca-pub-1882134198580257"}
          />
        </BannerAddWrapper>
      </ErrorBoundary> */}
      <Container className='container'>
        <div className='chat-wrapper'>
          <div className='left'>
            <ChatAsk />
          </div>
          <div className='right'>
            {/* <ErrorBoundary>
              <GoogleAdsenseSquare
                dataAdSlot={'3366781433'}
                clientId={'ca-pub-1882134198580257'}
              />
            </ErrorBoundary> */}
          </div>
        </div>
      </Container>
    </AskWrapper>
  );
};

export default Ask;
