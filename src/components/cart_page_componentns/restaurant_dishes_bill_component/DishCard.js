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

export const FoodTypeIndicator = (props) => {
  const { isVeg } = props;

  return isVeg === 1 ? (
    <div className="food-indicator vegOuterDiv">
      <div id="circle" className="vegInnerCircle"></div>
    </div>
  ) : (
    <div className="food-indicator nonVegOuterDiv">
      <div id="circle" className="nonVegInnerCircle"></div>
    </div>
  );
};
export const DishName = (props) => {
  return <span> {props.title}</span>;
};

export const QuantityController = () => {
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
