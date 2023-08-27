import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import MusicCard from "../components/MusicCard";

const Music = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="MUSIC" text="My released Songs " />
      <MusicCard />
      <Footer />
    </div>
  );
};

export default Music;
