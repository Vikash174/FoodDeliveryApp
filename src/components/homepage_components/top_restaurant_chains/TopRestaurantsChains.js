import { Title } from "../what's_on_your_mind/WhatOnYourMind";
import ResCard from '../ResCard';
import { NextPrevBtn } from '../best_offers_for_you/BestOffers';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopRestaurantsChains = (props) => {
  const { cards } = props.resData.data;
  const [resCardContainer, setResCardContainer] = useState();

  useEffect(() => {
    setResCardContainer(document.getElementById('rescard-container'));
  }, []);

  const topResChains = cards.filter(
    (card) => card.card.card.id === 'top_brands_for_you'
  );

  if (topResChains.length === 0) {
    return null;
  }

  const restaurantsList =
    topResChains[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return (
    <div className="border-b-2 border-gray-100">
      <div className="flex justify-between">
        <Title title={topResChains[0]?.card?.card?.header?.title} />
        <NextPrevBtn element={resCardContainer} />
      </div>
      <div
        id="rescard-container"
        className=" flex  overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {restaurantsList.map((res) => {
          return (
            <Link to={`/home/restaurants/${res.info.id}`} key={res.info.id}>
              <ResCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurantsChains;
