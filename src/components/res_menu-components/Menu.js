import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from '../homepage_components/Shimmer';
import { MENU_URL } from '../../utils/constant';
import CategoryAccordion from './CategoryAccordion';
import RestaurantDetailsHeader from './RestaurantDetailsHeader';

const Menu = () => {
  const [menuData, setMenuData] = useState(null);
  const params = useParams();

  // console.log(params);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const URL = MENU_URL + params.id;

    const data = await fetch(URL);
    const json = await data.json();

    setMenuData(json);
    // console.log(json);
  };

  if (menuData === null) return <Shimmer />;

  const accordionsList =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(accordionsList);
  return (
    <div className="menu-container">
      <RestaurantDetailsHeader menuData={menuData} />
      {accordionsList.map((accordion) => {
        if (accordion.card.card.title) {
          return <CategoryAccordion accordionData={accordion} />;
        }
      })}
      {/* <h1>{name}</h1>
      <h2>{city}</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul> */}
    </div>
  );
};

export default Menu;
