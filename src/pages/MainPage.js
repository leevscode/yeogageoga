import React from "react";
import ImageSlider from "../components/ImageSlider";
import "./MainPage.css";
import YouTubeVideo from "../components/YouTube";
import DaeguBukgu from "../components/DaeguBukgu";
import Daegudonggu from "../components/Daegudonggu";
import DaeguJunggu from "../components/DaeguJunggu";
import PortalSite from "../components/PortalSite";

const MainPage = () => {
  return (
    <>
      <ImageSlider />
      <div className="banner-section" />
      <YouTubeVideo />
      <div className="banner-section" />
      <p className="thememenutext">대구 추천 명소</p>
      <p className="themetext">북구</p>
      <DaeguBukgu />
      <div className="banner-section" />
      <p className="themetext">동구</p>
      <Daegudonggu />
      <div className="banner-section" />
      <p className="themetext">중구</p>
      <DaeguJunggu />
      <div className="banner-section" />
      <PortalSite />
      <div className="banner-section" />
    </>
  );
};

export default MainPage;
