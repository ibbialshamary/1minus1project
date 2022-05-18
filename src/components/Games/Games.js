import React from "react";
import classes from "../Games/Games.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import GunsGlory from "../../assets/images/games/Guns of glory.png";
import KingAvalon from "../../assets/images/games/King of avalon.png";
import StateSurvival from "../../assets/images/games/State of survival.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Games = () => {
  return (
    <div className={classes.container}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={GunsGlory} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={KingAvalon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={StateSurvival} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GunsGlory} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={KingAvalon} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={StateSurvival} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Games;
