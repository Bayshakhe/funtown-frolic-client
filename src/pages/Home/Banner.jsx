import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Banner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      <SwiperSlide>
        <div className="hero min-h-[600px] last:bg-[url('https://assets.website-files.com/5defbfd220b40f28dec337ba/5fb84ad453e0c10d031a5f6f_iStock-1053316568%20(1).jpg')]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">
                Rise To The Challenge.
              </h1>
              <p className="">
                Congratulations! We are ALL starting an exciting new season of
                dance! For us at TOP it will be year 23, but for me personally,
                it will be year 50 of dance experience.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero min-h-[600px] last:bg-[url('https://leaderonomics-storage.s3.ap-southeast-1.amazonaws.com/medium_Indian_Dance_262956c027.jpg')]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold">
              Dance Is For The Free Soul.
              </h1>
              <p className="mb-5">
                The Bharatnatyam star rose to the challenge last night and gave an
                assured performance wearing the Kalaivani Brass Bharatanatyam Ghungroo, leading by example.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero min-h-[600px] last:bg-[url('https://www.apollotheater.org/app/uploads/2021/07/Hip-Hop-Dance-scaled.jpg')]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold">
              Take Your Dance To The Next Level.
              </h1>
              <p className="mb-5">
              As dancers, we’re always trying to take our dancing up a notch, to improve our technique and artistry.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero min-h-[600px] last:bg-[url('https://balletmemphis.org/imager/assets/site-media/Homepage/2363/HomepageVideoBG_35ac9b3331b57c185c9691fcedc762ec.jpg')]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold">
              Express Yourself Through Movement.
              </h1>
              <p className="mb-5">
              Free-dance is an important element of Expression through Movement.  Participants are asked to interpret the music into their own bodies and pay attention to how they are moving. 
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
