import {
  FoodTypeIndicator,
  QuantityController,
  DishName
} from '../cart_page_componentns/restaurant_dishes_bill_component/DishCard';
import { CDN_URL } from '../../utils/constant';

const MenuDishCard = (props) => {
  const { name, isVeg, defaultPrice, imageId, description } =
    props.menuItem?.card?.info;
  // console.log(desscription);
  return (
    <div className="menu-dish-card">
      <div className="menu-dish-card-div1">
        <FoodTypeIndicator isVeg={isVeg} />
        <DishName title={name} />
        <PricePerItem defaultPrice={defaultPrice} />
        <DishDescription DishDescription={description} />
      </div>
      <div className="menu-dish-card-div2">
        <FoodImage imageId={imageId} />
        <AddButton />
      </div>
    </div>
    // <h1>MenuDishCard</h1>
  );
};

const DishDescription = (props) => {
  return (
    <div className="dish-description-container">
      <span>{props?.DishDescription?.substring(0, 50)}</span>
    </div>
  );
};

const PricePerItem = (props) => {
  const { defaultPrice } = props;
  return <span> ₹{defaultPrice}</span>;
};

const FoodImage = (props) => {
  return (
    <div className="food-img-container">
      <img src={CDN_URL + props.imageId} />
    </div>
  );
};

const AddButton = () => {
  return <button>Add</button>;
};

export default MenuDishCard;
