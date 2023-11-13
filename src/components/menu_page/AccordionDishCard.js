import { useDispatch } from 'react-redux';
import { CDN_URL } from '../../utils/constant';
import { addItem } from '../../utils/cartSlice';

const AccordionDishCard = (props) => {
  const { isVeg, name, defaultPrice, imageId } = props.itemCard.card.info;
  // console.log(props.dummy);

  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    // Dispatching an action

    dispatch(addItem(item));
  };
  return (
    <div className="p-2 m-2 flex justify-between items-center border-b-[1px] border-gray-300">
      <div className="flex flex-col py-3 my-3">
        {isVeg === 1 ? (
          <div className="w-4 h-4 border border-green-800 ">
            <div className="h-2 w-2 mx-auto my-[3px] bg-green-800 rounded-full"></div>
          </div>
        ) : (
          <div className="w-4 h-4 border border-red-800 ">
            <div className="h-2 w-2 mx-auto my-[3px] bg-red-800 rounded-full"></div>
          </div>
        )}

        <span className="my-1">{name}</span>
        <span>Rs {defaultPrice}</span>
      </div>
      <div className="relative">
        <img className="h-20 w-24" src={CDN_URL + imageId}></img>
        <button
          className="px-3 border border-green-600 text-xs font-bold text-green-600 absolute left-7 bottom-2 bg-white"
          onClick={() => addItemHandler(props.itemCard.card.info)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AccordionDishCard;
