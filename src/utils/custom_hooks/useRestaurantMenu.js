import { useState, useEffect } from 'react';
import { MENU_URL, proxyUrl } from '../constant';
import { useSelector } from 'react-redux';

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  const latLangObj = useSelector((store) => store.latLng);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const URL = `${MENU_URL}lat=${latLangObj.latLng.lat}&lng=${latLangObj.latLng.lng}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

    const data = await fetch(proxyUrl + URL);
    const json = await data.json();
    setResMenu(json);
  };

  return resMenu;
};

export default useRestaurantMenu;
