import RestaurantDetails from './RestaurantDetails';
import DishCard from './DishCard';
import BillSummary from './BillSummary';

const CartInDetail = () => {
  return (
    <div className="cart-detail-container">
      <div>
        <RestaurantDetails />
      </div>
      <div className="dishcard-container">
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />

        <BillSummary />
      </div>

      <div>TO PAY ₹1123</div>
    </div>
  );
};

export default CartInDetail;
