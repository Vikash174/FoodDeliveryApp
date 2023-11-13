import Adderess from './Adderess';
import Payment from './Payment';
import Account from './Account';
import CartInDetail from './restaurant_dishes_bill_component/CartInDetail';
import { useSelector } from 'react-redux';
useSelector;
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="h-[100vh] bg-gray-100">
      <div className="flex justify-center p-5 gap-5">
        <div className="flex  flex-col">
          <Account />
          {/* <Adderess />
          <Payment /> */}
        </div>
        <div className="">
          <CartInDetail cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
