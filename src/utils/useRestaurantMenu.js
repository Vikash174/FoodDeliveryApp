import { useState, useEffect } from 'react';
import { MENU_URL } from './constant';

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const URL = MENU_URL + resId;

    const data = await fetch(URL);
    const json = await data.json();
    setResMenu(json);
  };

  return resMenu;
};

export default useRestaurantMenu;
