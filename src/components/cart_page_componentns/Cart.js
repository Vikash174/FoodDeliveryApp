import Adderess from './Adderess';
import Payment from './Payment';
import CartInDetail from './restaurant_dishes_bill_component/CartInDetail';
const Cart = () => {
  return (
    <div className="cart">
      <div className="address-payment-container">
        <Adderess />
        <Payment />
      </div>
      <div className="dishes-bill-container">
        <CartInDetail />
      </div>
    </div>
  );
};

export default Cart;
