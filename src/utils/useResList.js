import { useEffect, useState } from 'react';
import { GET_RES_URL } from './constant';

const useResList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GET_RES_URL);

    const json = await data.json();

    let cards = json.data.cards;
    cards = cards.filter(
      (card) => card.card.card.id === 'restaurant_grid_listing'
    );
    const resListFromApi =
      cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setList(resListFromApi);
  };
  return list;
};

export default useResList;
