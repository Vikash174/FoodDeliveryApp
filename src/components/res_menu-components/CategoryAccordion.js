import React from 'react';
import { useState } from 'react';
import MenuDishCard from './MenuDishCard';

const CategoryAccordion = (props) => {
  console.log(props);
  const { title, itemCards } = props?.accordionData?.card?.card;
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>
              {`${title}  ${
                itemCards === undefined ? '' : ' (' + itemCards?.length + ')'
              }`}{' '}
            </div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive &&
            itemCards?.map((menuItem) => {
              return <MenuDishCard menuItem={menuItem} />;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoryAccordion;
