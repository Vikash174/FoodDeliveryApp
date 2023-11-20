import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { GET_RES_URL, LAT_LANG_URL } from '../../utils/constant';
import WhatOnYourMind from "./what's_on_your_mind/WhatOnYourMind";
import TopRestaurantsChains from './top_restaurant_chains/TopRestaurantsChains';
import RestaurantsWithOnlineDelivery from './restaurant_with_online_delivery/RestaurantsWIthOnlineDelivery';
import LocationUnserviceable from './location_unserviceable/LocationUnserviceable';
import LatLangContext from '../../utils/LatLangContext';
import { useParams, useOutletContext } from 'react-router-dom';
import BestOffers from './best_offers_for_you/BestOffers';
import LandingFooter from '../landing_page_components/LandingFooter';

const Body = () => {
  const [setLocation, setLatLang] = useOutletContext();

  const [resData, setResData] = useState(null);
  const { place_id, lat_long } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(LAT_LANG_URL + place_id.replace('+', '%'));

    const latLagData = await fetch(
      'https://www.swiggy.com/dapi/misc/address-recommend?latlng=23.1382094%2C79.8651101'
    );
    const latLangJson = await latLagData.json();
    const URL =
      GET_RES_URL +
      `lat=${latLangJson.data[0].geometry.location.lat}&lng=${latLangJson.data[0].geometry.location.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

    setLocation(latLangJson.data[0].formatted_address);

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
      <div className="">
        <BestOffers resData={resData} />
      </div>

      <div className="">
        <WhatOnYourMind resData={resData} />
      </div>

      <div className="">
        <TopRestaurantsChains resData={resData} />
      </div>
      <div className="">
        <RestaurantsWithOnlineDelivery resData={resData} />
      </div>
      <div className="">
        <LandingFooter />
      </div>
    </div>
  );
};

export default Body;
