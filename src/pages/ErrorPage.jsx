import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import errorImg from "../assets/errorGIF.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-[#232247] hero h-screen ">
      <div className="hero-content flex-col">
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
      <Link to={'/'} className="button">Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
