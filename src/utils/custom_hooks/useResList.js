import { useContext, useEffect, useState } from 'react';
import { GET_RES_URL, proxyUrl } from '../constant';
import LatLangContext from './LatLangContext';

const useResList = () => {
  const [list, setList] = useState([]);
  const latLangObj = useContext(LatLangContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(latLangObj);

    const data = await fetch(proxyUrl + GET_RES_URL);

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
