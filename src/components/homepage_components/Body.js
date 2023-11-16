import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { GET_RES_URL, LAT_LANG_URL } from '../../utils/constant';
import WhatOnYourMind from "./what's_on_your_mind/WhatOnYourMind";
import TopRestaurantsChains from './top_restaurant_chains/TopRestaurantsChains';
import RestaurantsWithOnlineDelivery from './restaurant_with_online_delivery/RestaurantsWIthOnlineDelivery';
import LocationUnserviceable from './location_unserviceable/LocationUnserviceable';
import LatLangContext from '../../utils/LatLangContext';
import { useParams } from 'react-router-dom';

const Body = () => {
  const [resData, setResData] = useState(null);
  const { place_id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const latLagData = await fetch(LAT_LANG_URL + place_id);
    const latLangJson = await latLagData.json();

    const URL =
      GET_RES_URL +
      `lat=${latLangJson.data[0].geometry.location.lat}&lng=${latLangJson.data[0].geometry.location.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

    const data = await fetch(URL);

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
