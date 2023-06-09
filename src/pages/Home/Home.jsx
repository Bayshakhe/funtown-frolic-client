import React from "react";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses";
import SectionTitle from "../../components/SectionTitle";
import PopularInstructors from "./PopularInstructors";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTitle
        subTitle="A Great Place To Learn"
        title="Popular Classes"
      ></SectionTitle>
      <PopularClasses></PopularClasses>
      <SectionTitle
        subTitle="The art of teaching is the art of assisting discovery."
        title="Popular Instructors"
      ></SectionTitle>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
