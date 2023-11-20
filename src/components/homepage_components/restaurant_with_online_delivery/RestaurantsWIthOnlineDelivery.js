import { Title } from "../what's_on_your_mind/WhatOnYourMind";
import ResCard from '../ResCard';
import { Link } from 'react-router-dom';

const RestaurantsWithOnlineDelivery = (props) => {
  const { cards } = props.resData.data;
  const resCard = cards.filter(
    (card) => card.card.card.id === 'popular_restaurants_title'
  );

  const resListCard = cards.filter(
    (card) => card.card.card.id === 'restaurant_grid_listing'
  );

  const resList =
    resListCard[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className="border-b-2 border-b-gray-100">
      <div>
        <Title title={resCard[0]?.card?.card?.title} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {resList.map((res) => {
          return (
            <Link key={res.info.id} to={`/home/restaurants/${res.info.id}`}>
              <ResCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantsWithOnlineDelivery;
