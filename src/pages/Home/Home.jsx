import React from "react";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses";
import SectionTitle from "../../components/SectionTitle";
import PopularInstructors from "./PopularInstructors";
import OurAccomplishments from "./OurAccomplishments";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTitle
        subTitle="A Great Place To Learn"
        title="Popular Classes"
      ></SectionTitle>
      <PopularClasses ></PopularClasses>
      <SectionTitle
        subTitle="The art of teaching is the art of assisting discovery."
        title="Popular Instructors"
      ></SectionTitle>
      <PopularInstructors></PopularInstructors>
      <SectionTitle
        subTitle="We advise you to take the right decision."
        title="Our Accomplishments"
      ></SectionTitle>
      <OurAccomplishments></OurAccomplishments>
    </div>
  );
};

export default Home;
