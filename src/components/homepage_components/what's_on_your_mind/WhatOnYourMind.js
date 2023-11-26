import { useEffect, useState } from 'react';
import { NextPrevBtn } from '../best_offers_for_you/BestOffers';
import { CDN_URL } from '/src/utils/constant.js';

const WhatOnYourMind = (props) => {
  const { cards } = props.resData.data;
  const [whatOnYourMindDishes_container, setWhatOnYourMindDishes_container] =
    useState(null);
  // console.log(props.resData);

  useEffect(() => {
    setWhatOnYourMindDishes_container(
      document.getElementById('whatOnYourMindDishes-container')
    );
  }, []);

  const whatOnYourMindDishes = cards.filter(
    (card) => card.card.card.id === 'whats_on_your_mind'
  );

  if (whatOnYourMindDishes.length === 0) {
    return null;
  }

  const dishesList =
    whatOnYourMindDishes[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  return (
    <div className="border-b-2 border-b-gray-100">
      <div className="flex justify-between">
        <Title title={whatOnYourMindDishes[0]?.card?.card?.header?.title} />
        <NextPrevBtn element={whatOnYourMindDishes_container} />
      </div>
      <div
        id="whatOnYourMindDishes-container"
        className="h-42 flex  overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {dishesList.map((dish) => {
          return <Image key={dish.id} dish={dish} />;
        })}
      </div>
    </div>
  );
};

export const Title = (props) => {
  const { title } = props;
  return (
    <span className="text-sm font-bold whitespace-nowrap md:text-lg md:py-2 lg:text-xl lg:mt-2 ">
      {title}
    </span>
  );
};

const Image = (props) => {
  const { imageId } = props?.dish;
  return (
    <div className="min-w-max p-2 m-2  hover:cursor-pointer ">
      <img className="w-16 md:w-28" src={CDN_URL + imageId} />
    </div>
  );
};

export default WhatOnYourMind;
