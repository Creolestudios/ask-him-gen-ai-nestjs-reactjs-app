import React from 'react';
import { HomeWrapper } from './Home.styles';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import { homeBannerslider } from '../../constant';
import Information from '../../components/Information/Information';
import AskingHome from '../../components/AskingHome/AskingHome';
import ChatHome from '../../components/ChatHome/ChatHome';
// import BannerAdd from '../../components/BannerAdd/BannerAdd';

const Home = () => {
  return (
    <HomeWrapper>
      <BannerSlider slideData={homeBannerslider} />
      {/* <BannerAdd /> */}
      <Information />
      <AskingHome />
      <ChatHome />
    </HomeWrapper>
  );
};

export default Home;
