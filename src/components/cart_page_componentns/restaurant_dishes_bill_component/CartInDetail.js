import RestaurantDetails from './RestaurantDetails';
import DishCard from './DishCard';
import BillSummary from './BillSummary';

const CartInDetail = (props) => {
  const { cartItems } = props;

  return (
    <div className="bg-white p-5 text-start">
      <div>
        <RestaurantDetails />
      </div>
      <div className="max-h-[70vh] overflow-auto">
        {cartItems.map((cartItem) => {
          return <DishCard dish={cartItem} />;
        })}

        <BillSummary />
      </div>

      <div className="flex justify-between mt-2 mr-7 font-bold p-3">
        <span>TO PAY</span>
        <span>Rs. 2222</span>
      </div>
    </div>
  );
};

export default CartInDetail;
