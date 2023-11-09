import ResCard from './ResCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { GET_RES_URL } from '../../utils/constant';
import WhatOnYourMind from "./what's_on_your_mind/WhatOnYourMind";
import TopRestaurantsChains from './top_restaurant_chains/TopRestaurantsChains';
import RestaurantsWithOnlineDelivery from './restaurant_with_online_delivery/RestaurantsWIthOnlineDelivery';
import LocationUnserviceable from './location_unserviceable/LocationUnserviceable';

const Body = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RES_URL);

    const json = await data.json();

    setResData(json);
  };
  // Conditional Rendering

  if (resData === null) {
    return <Shimmer />;
  }

  if (resData.data.cards[0].card.card.title === 'Location Unserviceable') {
    return <LocationUnserviceable />;
  }
  return (
    <div className="mx-[10vw]">
      <div className="p-2 m-2 ">
        <WhatOnYourMind resData={resData} />
      </div>

      <div className="p-2 m-2 ">
        <TopRestaurantsChains resData={resData} />
      </div>
      <div className="p-2 m-2 ">
        <RestaurantsWithOnlineDelivery resData={resData} />
      </div>
    </div>
  );
};

export default Body;
