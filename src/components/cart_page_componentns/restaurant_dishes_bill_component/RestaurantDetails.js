const RestaurantDetails = () => {
  return (
    <div className="flex gap-2">
      <div className="res-image">
        <ResLogo />
      </div>
      <div className="flex flex-col">
        <ResTitle />
        <ResFirstAdderess />
      </div>
    </div>
  );
};

const ResLogo = () => {
  return (
    <img
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/amnhccupmtyts6jxhqef"
      className="w-12 h-12"
    />
  );
};

const ResTitle = () => {
  return (
    <div className="text-sm">
      <h3>UFO Fries & Corns</h3>
    </div>
  );
};

const ResFirstAdderess = () => {
  return (
    <div className="text-xs">
      <span>Shivajinager</span>
    </div>
  );
};

export default RestaurantDetails;
