import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from '../homepage_components/Shimmer';
import CategoryAccordion from './CategoryAccordion';
import RestaurantDetailsHeader from './RestaurantDetailsHeader';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const Menu = () => {
  const { id } = useParams();
  const menuData = useRestaurantMenu(id);

  if (menuData === null) return <Shimmer />;

  const accordionsList =
    menuData?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  return (
    <div className="menu-container">
      <RestaurantDetailsHeader menuData={menuData} />
      {accordionsList?.map((accordion) => {
        if (accordion.card.card.title) {
          return (
            <CategoryAccordion
              key={accordion.card.card.title}
              accordionData={accordion}
            />
          );
        }
      })}
    </div>
  );
};

export const VegOnly = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      console.log('checked');
    }
  };
  return (
    <div className="veg-only-switch-container">
      <p>Veg Only</p>
      <label className="switch">
        <input type="checkbox" value={isChecked} onChange={handleChange} />
        <span className="slider round"></span>
        <div className="green-red-dot"></div>
      </label>
    </div>
  );
};
export default Menu;
