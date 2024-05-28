import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BannerSliderWrapper } from "./BannerSlider.styles";
import CustomButtom from "../CustomButtom/CustomButtom";
import { ReactComponent as MessageSvg }  from '../../assets/images/message.svg';
import { Link } from "react-router-dom";

const BannerSlider = ({ slideData }) => {
  return (
    <BannerSliderWrapper>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        //   scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slideData.map((item) => (
          <SwiperSlide>
            <div className="item" style={{background: `url(${item.href})`}}>
                <div className="content">
                    <h1>{item.title}</h1>
                    <Link to={'/ask'}>
                      <CustomButtom className='secondary-btn' text="" height={'80px'} background={'#496186'} color={'#fff'} icon={MessageSvg} textVisiableMb={true} />
                    </Link>
                </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
            <div>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
      
    </BannerSliderWrapper>
  );
};

export default BannerSlider;
