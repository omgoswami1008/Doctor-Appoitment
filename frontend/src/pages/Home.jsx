// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../componets/Header";
import SpecialityMenu from "../componets/SpecialityMenu";
import TopDoctors from "../componets/TopDoctors";
import Banner from "../componets/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
