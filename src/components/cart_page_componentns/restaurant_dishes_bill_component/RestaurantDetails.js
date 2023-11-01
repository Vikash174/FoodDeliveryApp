const RestaurantDetails = () => {
  return (
    <div className="res-detail-container">
      <div className="res-image">
        <ResLogo />
      </div>
      <div className="res-title-adderess">
        <ResTitle />
        <ResFirstAdderess />
      </div>
    </div>
  );
};

const ResLogo = () => {
  return (
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/amnhccupmtyts6jxhqef" />
  );
};

const ResTitle = () => {
  return (
    <div id="res-title">
      <h3>UFO Fries & Corns</h3>
    </div>
  );
};

const ResFirstAdderess = () => {
  return (
    <div id="res-first-adderess">
      <span>Shivajinager</span>
    </div>
  );
};

export default RestaurantDetails;
