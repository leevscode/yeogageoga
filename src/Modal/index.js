import React from "react";
import "./SightseeingPageModal.css";
import Map from "../components/Map";

const SightseeingPageModal = ({ sightseeingSelected, setModalOpen }) => {
  const { title, addr1, firstimage, overview } = sightseeingSelected;

  const expGuide = sightseeingSelected.expguide;

  // 지도 경도, 위도표시
  const latitude = sightseeingSelected.mapy;
  const longitude = sightseeingSelected.mapx;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={() => setModalOpen(false)}>X</button>
        <h2>{title}</h2>
        <img
          src={
            firstimage
              ? firstimage
              : "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyvvVQ%2Fbtrk9tbw4G4%2Fu7Ztp6kJBDqQRX45wxYg8K%2Fimg.gif"
          }
          alt={title}
        />
        <p>주소: {addr1}</p>
        <p>전화번호: {sightseeingSelected.infocenter || "정보에 없음"}</p>
        <div className="modal-border"></div>
        <div className="description">
          <p>{sightseeingSelected?.overview}</p>
        </div>

        <div className="map">
          <h2>지도</h2>
          <Map
            latitude={latitude}
            longitude={longitude}
            title={sightseeingSelected.title}
          />
        </div>
      </div>
    </div>
  );
};

export default SightseeingPageModal;
