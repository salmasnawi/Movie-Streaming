import React from "react";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import NewRelease from "../components/NewRelease";
import MovieGallery from "../components/MovieGallery";
import RecentlyUpdated from "../components/RecentlyUpdated ";



const Home = () => {
  return (
    <div>
      <Hero id="hero" />
      <Trending id="Trending" />
      <RecentlyUpdated id="recently-updated" />
      <NewRelease id="new-release" />
      <MovieGallery id="movie-gallery" />
      

    </div>
  );
};

export default Home;
