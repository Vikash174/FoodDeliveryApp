import AccordionDishCard from './AccordionDishCard';
import { useState } from 'react';
const CategoryAccordion = () => {
  const [showAccordionItems, setShowAccordionItems] = useState(false);
  return (
    <div>
      <div className="p-2 m-2 flex justify-between bg-gray-100">
        <span>{'Recommended (18)'}</span>
        <span>🔽</span>
      </div>

      {showAccordionItems && (
        <div>
          <AccordionDishCard />
          <AccordionDishCard />
          <AccordionDishCard />
          <AccordionDishCard />
          <AccordionDishCard />
        </div>
      )}
    </div>
  );
};

export default CategoryAccordion;
