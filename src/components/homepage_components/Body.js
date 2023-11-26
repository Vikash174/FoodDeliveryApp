import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { GET_RES_URL, LAT_LANG_URL, proxyUrl } from '../../utils/constant';
import WhatOnYourMind from "./what's_on_your_mind/WhatOnYourMind";
import TopRestaurantsChains from './top_restaurant_chains/TopRestaurantsChains';
import RestaurantsWithOnlineDelivery from './restaurant_with_online_delivery/RestaurantsWIthOnlineDelivery';
import LocationUnserviceable from './location_unserviceable/LocationUnserviceable';

import { useParams, useOutletContext } from 'react-router-dom';
import BestOffers from './best_offers_for_you/BestOffers';
import LandingFooter from '../landing_page_components/LandingFooter';
import { useDispatch } from 'react-redux';
import { updateLatLng } from '../../redux/slices/latLngSlice';

const Body = () => {
  const [setLocation, setLatLang] = useOutletContext();
  const [resData, setResData] = useState(null);

  const { place_id } = useParams();
  const dispatch = useDispatch();
  // console.log(useParams());
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // console.log(useParams());

    let url = '';
    const latLngArr = place_id.split('+');

    if (latLngArr.length === 2) {
      url =
        GET_RES_URL +
        `lat=${latLngArr[0]}&lng=${latLngArr[1]}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

      dispatch(updateLatLng({ lat: latLngArr[0], lng: latLngArr[1] }));
    } else {
      const latLagData = await fetch(proxyUrl + LAT_LANG_URL + place_id);
      const latLangJson = await latLagData.json();
      url =
        GET_RES_URL +
        `lat=${latLangJson.data[0].geometry.location.lat}&lng=${latLangJson.data[0].geometry.location.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      setLocation(latLangJson.data[0].formatted_address);

      dispatch(
        updateLatLng({
          lat: latLangJson.data[0].geometry.location.lat,
          lng: latLangJson.data[0].geometry.location.lng
        })
      );
    }

    const data = await fetch(proxyUrl + url).catch((error) =>
      console.error('Error:', error)
    );

    // console.log(data);
    const json = await data.json();

    const capitalizeFirstLetter = (string) => {
      return string?.charAt(0)?.toUpperCase() + string?.slice(1);
    };
    if (latLngArr.length === 2) {
      setLocation(
        capitalizeFirstLetter(json?.data?.cards[12]?.card?.card?.citySlug) +
          ', India'
      );
    }

    setResData(json);
  };
  // Conditional Rendering

  if (resData === null) {
    return <Shimmer />;
  }
  // console.log(resData);
  if (resData.data.cards[0].card.card.title === 'Location Unserviceable') {
    return <LocationUnserviceable />;
  }
  return (
    <>
      <div className="mx-[10vw]">
        <div className="my-2">
          <BestOffers resData={resData} />
        </div>

        <div className="my-2">
          <WhatOnYourMind resData={resData} />
        </div>

        <div className="my-2">
          <TopRestaurantsChains resData={resData} />
        </div>
        <div className="my-2">
          <RestaurantsWithOnlineDelivery resData={resData} />
        </div>
      </div>
      <div className="my-2">
        <LandingFooter />
      </div>
    </>
  );
};

export default Body;
