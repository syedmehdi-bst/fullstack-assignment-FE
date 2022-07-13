import React from "react";
import AppRow from "./AppRow";
import { useEffect } from "react";

const Home = () => {
  return (
    <div className="pt-16">
      <AppRow title="Top Apps" query="apps" />
      <AppRow title="Top Games" query="games" />
      <AppRow
        title="Top Communication Apps"
        query="apps?category=Communication"
      />
      <AppRow title="Top Social Apps" query="apps?category=Social" />
      <AppRow
        title="Top Entertainment Apps"
        query="apps?category=Entertainment"
      />
      <AppRow title="Top Productivity Apps" query="apps?category=Tools" />
      <AppRow title="Top Shopping Apps" query="apps?category=Shopping" />
      <AppRow title="Top Racing Games" query="games?category=Racing" />
      <AppRow title="Top Casual Games" query="games?category=Casual" />
      <AppRow title="Top Action Games" query="games?category=Action" />
    </div>
  );
};

export default Home;
