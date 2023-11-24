import { useEffect, useState } from 'react';
import { GET_RES_URL, PLACE_AUTOCOMPLETE_URL, proxyUrl } from '../constant';

const useRecommendedPlaces = (searchTerm) => {
  const [listOfCities, setListOfCities] = useState([]);
  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const fetchData = async () => {
    const data = await fetch(proxyUrl + PLACE_AUTOCOMPLETE_URL + searchTerm);

    const json = await data.json();

    setListOfCities(json.data);
  };
  return listOfCities;
};

export default useRecommendedPlaces;
