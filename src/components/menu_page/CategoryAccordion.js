import AccordionDishCard from './AccordionDishCard';

const CategoryAccordion = (props) => {
  const { title, itemCards } = props.accordionItem.card.card;
  const { showAccordionItems, setIndexToBeShown } = props;

  const handleClick = () => {
    setIndexToBeShown();
    props.setShowItem();
  };

  return (
    <div>
      <div
        className="p-2 m-2 flex justify-between bg-gray-100 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {title + ' (' + itemCards.length + ')'}
        </span>
        <span>🔽</span>
      </div>

      {showAccordionItems &&
        itemCards.map((itemCard) => {
          return (
            <AccordionDishCard
              key={itemCard.card.info.id}
              itemCard={itemCard}
              dummy={props.dummy}
            />
          );
        })}
    </div>
  );
};

export default CategoryAccordion;
