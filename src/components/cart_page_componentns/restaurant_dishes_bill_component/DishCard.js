const DishCard = () => {
  return (
    <div className="dish-card">
      <FoodTypeIndicator />
      <DishName />
      <QuantityController />
      <TotalPrice />
    </div>
  );
};

const FoodTypeIndicator = () => {
  return (
    <div className="food-indicator">
      <div id="circle"></div>
    </div>
  );
};
const DishName = () => {
  return <span> Chilli CHees Cheese Max Fries</span>;
};

const QuantityController = () => {
  return (
    <div className="quantity-controller">
      <button>-</button>
      <span> 1 </span>
      <button>+</button>
    </div>
  );
};

const TotalPrice = () => {
  return <span>₹240</span>;
};

export default DishCard;
