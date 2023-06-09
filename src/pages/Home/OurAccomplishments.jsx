import React from "react";

const OurAchievements = () => {
  return (
    <div className="bg-teal text-white text-center p-12 md:py-20 md:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow bg-teal ">
        <div className="w-full shadow-md shadow-white p-8 border-x border-white flex flex-row-reverse items-center justify-center">
          <div className=" text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-12 h-12 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div>
            <div className="stat-title text-gray-300">Dance Community</div>
            <div className="stat-value text-4xl text-white">7th</div>
            <div className="stat-desc text-gray-300">
              Show our strong position <br /> in this community
            </div>
          </div>
        </div>

        <div className="shadow-md shadow-white p-8 border-x border-white  flex flex-row-reverse items-center justify-center">
          <div className="stat-figure text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-12 h-12 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div>
            <div className="stat-title text-gray-300">Award Winning</div>
            <div className="stat-value text-4xl text-white">36%</div>
            <div className="stat-desc text-gray-300">
              It is a huge number of <br /> our success
            </div>
          </div>
        </div>

        <div className=" shadow-md shadow-white p-8 border-x border-white  flex flex-row-reverse items-center justify-center">
          <div className="stat-figure text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-12 h-12 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div>
            <div className="stat-title text-gray-300">New Registers</div>
            <div className="stat-value text-4xl text-white">32+</div>
            <div className="stat-desc text-gray-300">Let us see <br /> It is increasing...</div>
          </div>
        </div>

        <div className="shadow-md shadow-white p-8 border-x border-white  flex flex-row-reverse items-center justify-center">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              className="inline-block w-12 h-12 stroke-current text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div>
            <div className="stat-title text-gray-300">Happy Clients</div>
            <div className="stat-value text-4xl text-white">93%</div>
            <div className="stat-desc text-gray-300">
              They are happy for join us <br />
              And enjoy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;
