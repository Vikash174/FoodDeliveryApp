const MenuHeader = (props) => {
  const { resInfo } = props;

  return (
    <div className="w-auto text-center">
      <RestaurantMetaData resInfo={resInfo} />
      <DeliveryTimeAndOffers resInfo={resInfo} />
    </div>
  );
};

const RestaurantMetaData = (props) => {
  const {
    name,
    cuisines,
    areaName,
    avgRatingString,
    totalRatingsString,
    sla,
    feeDetails
  } = props.resInfo;
  return (
    <div className="m-2 p-2 flex justify-between items-start border-dashed border-gray-500 border-b">
      <div className=" flex-col text-start">
        <p className=" m-1 font-medium text-xl">{name}</p>
        <p className="m-1 text-sm text-gray-500">{cuisines.join(', ')}</p>
        <p className="m-1 text-sm text-gray-500">
          {areaName + ' ' + sla.lastMileTravelString}
        </p>
        <p className="my-3 p-1 text-sm text-gray-500">{feeDetails.message} </p>
      </div>
      <div className="border border-gray-200 rounded-lg">
        <p className="mx-2 my-2 px-2 border-b-[1px] border-gray-200 ">
          {avgRatingString}
        </p>
        <p className="text-[0.6rem] p-2 text-gray-500 font-bold">
          {totalRatingsString}
        </p>
      </div>
    </div>
  );
};

const DeliveryTimeAndOffers = (props) => {
  const { resInfo } = props;
  return (
    <div>
      <div>
        <DeliveryTimeAndCostForTwo resInfo={resInfo} />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

const DeliveryTimeAndCostForTwo = (props) => {
  const { costForTwoMessage, sla } = props.resInfo;
  return (
    <ul className="p-2 m-2 flex">
      <li className="flex items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle
            r="8.35"
            transform="matrix(-1 0 0 1 9 9)"
            stroke="#3E4152"
            stroke-width="1.3"
          ></circle>
          <path
            d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
            fill="#3E4152"
          ></path>
        </svg>
        <span className="mx-2">{sla.slaString}</span>
      </li>
      <li className="flex items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle
            cx="9"
            cy="9"
            r="8.25"
            stroke="#3E4152"
            stroke-width="1.5"
          ></circle>
          <path
            d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
            fill="#3E4152"
          ></path>
        </svg>
        <span className="mx-2">{costForTwoMessage}</span>
      </li>
    </ul>
  );
};

export default MenuHeader;
