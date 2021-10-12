import React from "react";

import getData from "../services/get";
import compareResults from "../utility/compare";
import DistroCard from "../components/DistroCard";
import DistroChart from "../components/DistroChart";
import DistroGamingChart from "../components/DistroGamingChart";

const StatsPage = () => {
  const { data, error, isLoading } = getData();

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { home: homeData /*, server: serverData*/ } = data;

  const distro = compareResults(homeData);

  console.log(distro);

  return (
    <div>
      <DistroCard distro={distro} />
      <DistroChart data={homeData} />
      <DistroGamingChart data={homeData} />
    </div>
  );
};

export default StatsPage;
