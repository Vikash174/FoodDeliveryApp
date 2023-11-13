import MenuHeader from './MenuHeader';
import CategoryAccordion from './CategoryAccordion';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import Shimmer from '../homepage_components/Shimmer';
import { useState } from 'react';
const Menu = () => {
  const { id } = useParams();

  const menuData = useRestaurantMenu(id);

  const [indexToBeShown, setIndexToBeShown] = useState(null);

  const [showItem, setShowItem] = useState(false);

  const dummy = 'Dummy data';

  if (menuData === null) {
    return <Shimmer />;
  }

  const resInfo = menuData?.data?.cards[0].card?.card.info;
  const accordionList =
    menuData?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (card) =>
        card.card.card['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  // console.log(accordionList);

  return (
    <div className="md:mx-[20wh] lg:mx-[25vw] flex-col">
      <MenuHeader resInfo={resInfo} />
      {accordionList.map((accordionItem, index) => {
        return (
          <CategoryAccordion
            key={accordionItem.card.card.title}
            accordionItem={accordionItem}
            showAccordionItems={index === indexToBeShown && showItem}
            setIndexToBeShown={() => setIndexToBeShown(index)}
            setShowItem={() => setShowItem(!showItem)}
            dummy={dummy}
          />
        );
      })}
    </div>
  );
};

export default Menu;
