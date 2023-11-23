import Adderess from './Adderess';
import Payment from './Payment';
import Account from './Account';
import CartInDetail from './restaurant_dishes_bill_component/CartInDetail';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
useSelector;
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const cartPayload = {
    flushFirst: false,
    cart: {
      restaurantId: 774703,
      address_id: '',
      couponCode: '',
      cartItems: [
        {
          addons: [],
          variants: [],
          in_stock: 1,
          menu_item_id: 125646213,
          quantity: 1,
          rewardType: null
        },
        {
          addons: [],
          variants: [],
          in_stock: 1,
          menu_item_id: 125646242,
          quantity: 1,
          rewardType: null
        },
        {
          addons: [],
          variants: [],
          in_stock: 1,
          menu_item_id: 125646244,
          quantity: 1,
          rewardType: null
        },
        {
          addons: [],
          variants: [],
          menu_item_id: '125646979',
          quantity: 1
        }
      ],
      mealItems: [],
      subscriptionItems: []
    },
    _csrf: 'JcDnzIMjngK6-TCMnI61LVlEYF1WlDO9RA6O_sNs'
  };
  const fecthData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/cart', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        origin: 'https://www.swiggy.com',
        referer:
          'https://www.swiggy.com/restaurants/mcdonalds-fc-road-shivaji-nagar-pune-774703'
      },
      body: JSON.stringify(cartPayload)
    });

    const jsonData = await data.json();
    console.log(jsonData);
  };

  useEffect(() => {
    // const data = fecthData();
  }, []);

  return cartItems.length === 0 ? (
    <h1>Cart Is Empty</h1>
  ) : (
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
