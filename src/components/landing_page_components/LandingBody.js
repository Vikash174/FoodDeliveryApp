const LandingBody = () => {
  return (
    <div>
      <div className="bg-[#2b1e16] w-[100vw] ">
        <Services />
      </div>
      <div>
        <AppPromotion />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-around sm:items-end sm:pb-6 ">
      <NoMinimumOrder />
      <LiveOrderTracking />
      <LightningFastDelivery />
    </div>
  );
};

const NoMinimumOrder = () => {
  return (
    <div className="flex flex-col w-72 text-center sm:w-52 ">
      <div>
        <img
          className="w-28 ml-[90px] sm:ml-[50px] "
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
        />
      </div>

      <div>
        <span className="text-white md:text-lg">No Minimum Order</span>
      </div>
      <div>
        <span className="text-[#e0cbc1] md:text-lg">
          Order in for yourself or for the group, with no restricons on order
          value
        </span>
      </div>
    </div>
  );
};

const LiveOrderTracking = () => {
  return (
    <div className="flex flex-col w-72 text-center sm:w-52">
      <div>
        <img
          className="w-28 ml-[90px] sm:ml-[50px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
        />
      </div>

      <div>
        <span className="text-white md:text-lg">Liver Order Tracking</span>
      </div>
      <div>
        <span className="text-[#e0cbc1] md:text-lg">
          Know where your order is at all times, from the restaurant to yoru
          doorstep
        </span>
      </div>
    </div>
  );
};

const LightningFastDelivery = () => {
  return (
    <div className="flex flex-col w-72 text-center sm:w-52">
      <div>
        <img
          className="w-28 ml-[90px] sm:ml-[50px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
        />
      </div>

      <div>
        <span className="text-white md:text-lg">Lightning-Fast Delivery</span>
      </div>
      <div>
        <span className="text-[#e0cbc1] md:text-lg">
          Experience Swiggy's superfast delivery for food delivered fresh & on
          time
        </span>
      </div>
    </div>
  );
};

const AppPromotion = () => {
  return (
    <div className="flex justify-evenly w-[100vw]">
      <AppPromotionMetaData />
      <AppScreenShots />
    </div>
  );
};

const AppPromotionMetaData = () => {
  return (
    <div className="p-2 lg:h-[300px] lg:m-10">
      <div className="w-60 p-1">
        <span className="text-2xl font-semibold md:text-3xl ">
          Restaurants in your pocket
        </span>
      </div>
      <div className="w-96 p-1 md:text-xl">
        <span>
          Order from your favorite restaurants & track on the go, with the
          all-new Swiggy app.
        </span>
      </div>
      <div className="flex p-2 ">
        <GooglePlayStoreButton />
        <AppleStoreButton />
      </div>
    </div>
  );
};

export const GooglePlayStoreButton = () => {
  return (
    <div className="mr-2 my-2 border border-white rounded-lg">
      <img
        className="w-44 sm:w-32 md:w-44"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
      ></img>
    </div>
  );
};

export const AppleStoreButton = () => {
  return (
    <div className="mr-2 my-2 border border-white rounded-lg">
      <img
        className="w-44 sm:w-32 md:w-44"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
      ></img>
    </div>
  );
};

const AppScreenShots = () => {
  return (
    <div className="hidden sm:flex ">
      <img
        className="w-36 md:w-48 lg:w-80"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
      />
      <img
        className="w-36 md:w-48 lg:w-80"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
      />
    </div>
  );
};

export default LandingBody;
