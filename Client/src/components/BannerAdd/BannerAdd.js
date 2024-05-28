import React from 'react';
import { BannerAddWrapper } from './BannerAdd.styles';
// import bannerAdd from '../../assets/images/banner-add.png';
// import GoogleAdsenseHorizontal from '../GoogleAdsense/GoogleAdsenseHorizontal';
import GoogleAdsenseVertical from '../GoogleAdsense/GoogleAdsenseVertical';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const BannerAdd = () => {
    return (
        <BannerAddWrapper>
            {/* <img src={bannerAdd} alt="banner-add-img" /> */}
            {/* <GoogleAdsense dataAdSlot={'3805168661'} /> */}
            <ErrorBoundary>
                <GoogleAdsenseVertical dataAdSlot={'7972789593'} clientId={'ca-pub-1882134198580257'} />
            </ErrorBoundary>
        </BannerAddWrapper>
    );
};

export default BannerAdd;