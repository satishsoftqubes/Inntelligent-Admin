import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileImg from "../../assets/Images/Header/profile-img.png";

export const ClientSelection = () => {
  const navigate = useNavigate();

  function getClientDetails() {
    navigate("/home");
  }

  return (
    <>
      <div className="login-title">Select Client</div>
      <div className="client-selection-area">
        <button onClick={() => getClientDetails()}>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
        <button>
          <img src={ProfileImg} alt="" />
          <span>Lorem, ipsum.</span>
        </button>
      </div>
    </>
  );
};
