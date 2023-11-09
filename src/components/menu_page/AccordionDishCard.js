import { faL } from '@fortawesome/free-solid-svg-icons';

const AccordionDishCard = () => {
  return (
    <div className="p-2 m-2 flex justify-between items-center">
      <div className="flex flex-col">
        <img src="src\assests\images\veg.png" />
        <span>{'Crispy Veg Burger+Fries(M)'}</span>
        <span>Rs 150</span>
      </div>
      <div>
        <img
          className="h-20 w-24"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/7798d7bed74c81bc0e5ffc677a7d2eef"
        ></img>
        <button>Add</button>
      </div>
    </div>
  );
};

export default AccordionDishCard;
