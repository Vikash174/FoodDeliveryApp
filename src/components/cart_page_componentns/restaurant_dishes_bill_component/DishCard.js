const DishCard = (props) => {
  const { isVeg, name, inStock, price } = props.dish;

  return (
    <div className="flex items-center py-2 gap-2 mr-5 justify-between text-start">
      <FoodTypeIndicator isVeg={isVeg} />
      <DishName name={name} />
      <QuantityController inStockQty={inStock} />
      <TotalPrice price={price} />
    </div>
  );
};

export const FoodTypeIndicator = ({ isVeg }) => {
  return isVeg ? (
    <div className="w-3 h-3  border border-green-600">
      <div className="w-[7px] h-[7px] mx-auto my-[1px] bg-green-700 rounded-full"></div>
    </div>
  ) : (
    <div className="w-3 h-3 border border-red-600">
      <div className="w-[7px] h-[7px] mx-auto my-[1px] bg-red-700 rounded-full"></div>
    </div>
  );
};
export const DishName = ({ name }) => {
  return <span className="text-sm max-w-[150px]">{name}</span>;
};

export const QuantityController = ({ inStockQty }) => {
  return (
    <div className="px-2 mx-2 text-green-600 border border-green-600">
      <button>-</button>
      <span> {inStockQty} </span>
      <button>+</button>
    </div>
  );
};

const TotalPrice = ({ price }) => {
  return <span className="text-xs text-start w-12"> ₹ {price / 100}</span>;
};

export default DishCard;
