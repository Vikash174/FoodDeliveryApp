import RestaurantDetails from './RestaurantDetails';
import DishCard from './DishCard';
import BillSummary from './BillSummary';
import useRestaurantMenu from '../../../utils/custom_hooks/useRestaurantMenu';

const CartInDetail = (props) => {
  const { cartItems } = props;

  const restaurantInfo = useRestaurantMenu(props.cartItems[0].resId);

  let itemTotal = 0;
  cartItems.map((cartItem) => {
    itemTotal += cartItem.price | cartItem.defaultPrice;
  });

  let deliveryFee = (itemTotal * 4) / 100;
  let platformFee = (itemTotal * 1) / 100;
  let gst = (itemTotal * 18) / 100;

  return (
    <div className="bg-white p-5 text-start">
      <div>
        {restaurantInfo && <RestaurantDetails resDetails={restaurantInfo} />}
      </div>
      <div className="max-h-[70vh] overflow-auto">
        {cartItems.map((cartItem) => {
          return <DishCard dish={cartItem} />;
        })}

        <BillSummary
          itemTotal={itemTotal}
          deliveryFee={deliveryFee}
          platformFee={platformFee}
          gst={gst}
        />
      </div>

      <div className="flex justify-between mt-2 mr-7 font-bold p-3">
        <span>TO PAY</span>
        <span>₹{(itemTotal + deliveryFee + platformFee + gst) / 100}</span>
      </div>
    </div>
  );
};

export default CartInDetail;
