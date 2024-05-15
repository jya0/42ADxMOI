import React, {useState} from "react";
import KudoCard from "../images/kudo-card.svg";
import DonateCard from "../images/donate-kudo.svg";
import Redeem from "../images/redeem.svg";
import Donate from "../images/volunteer.svg";

export default function Kudos() {
  const [selectedImage, setSelectedImage] = useState("image1");

  const handleTabClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <>
      <div className="kudos-main">
        <div className="tab">
          <button
            className="tab-btn tab1"
            onClick={() => handleTabClick("image1")}
          >
            <img src={Redeem} alt="redeem" />
            Redeem Kudos
          </button>
          <button
            className="tab-btn tab2"
            onClick={() => handleTabClick("image2")}
          >
            <img src={Donate} alt="donate" />
            Donate Kudos
          </button>
        </div>
        <div className="image-container">
          {selectedImage === "image1" && <img src={KudoCard} alt="1" />}
          {selectedImage === "image2" && <img src={DonateCard} alt="2" />}
        </div>
      </div>
    </>
  );
}
