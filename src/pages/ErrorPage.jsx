import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import errorImg from '../assets/errorGIF.json'

const ErrorPage = () => {
  return (
    <div className="bg-[#232247] hero h-screen ">
        <div className="hero-content">
      <Player
        autoplay
        loop
        src={errorImg}
        style={{ height: "500px", width: "500px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
    </div>
  );
};

export default ErrorPage;
