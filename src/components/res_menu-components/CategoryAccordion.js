import React from 'react';
import { useState } from 'react';
import MenuDishCard from './MenuDishCard';

const CategoryAccordion = (props) => {
  const { title, itemCards } = props?.accordionData?.card?.card;
  const [isActive, setIsActive] = useState(false);

  const accordionTitle = `${title}  ${
    itemCards === undefined ? '' : ' (' + itemCards?.length + ')'
  }`;

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{accordionTitle}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>

        {isActive &&
          itemCards?.map((menuItem) => {
            return (
              <MenuDishCard
                key={menuItem?.card?.info?.id}
                menuItem={menuItem}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CategoryAccordion;
