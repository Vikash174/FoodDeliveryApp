import { Title, NextPrevBtn } from "../what's_on_your_mind/WhatOnYourMind";
import ResCard from '../ResCard';

const TopRestaurantsChains = (props) => {
  const { cards } = props.resData.data;
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
        <NextPrevBtn />
      </div>
      <div className=" flex overflow-y-auto overflow-hidden">
        {restaurantsList.map((res) => {
          return <ResCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default TopRestaurantsChains;
