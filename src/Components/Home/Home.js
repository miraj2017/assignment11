import React from "react";
import Advantages from "../Advantages/Advantages";
import Banner from "../Banner/Banner";
import BottomBanner from "../BottomBanner/BottomBanner";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BottomBanner></BottomBanner>
      <Advantages></Advantages>
      <Services></Services>
      <Review></Review>
    </div>
  );
};

export default Home;
