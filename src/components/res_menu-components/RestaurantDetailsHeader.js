import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faIndianRupeeSign,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const RestaurantDetailsHeader = (props) => {
  const { menuData } = props;
  console.log(menuData?.data?.cards[0]?.card?.card?.info);
  console.log(menuData?.data?.cards[0]?.card?.card?.info);
  const {
    name,
    cuisines,
    avgRating,
    areaName,
    sla,
    totalRatingsString,
    costForTwoMessage
  } = menuData?.data?.cards[0]?.card?.card?.info;
  return (
    <div className="restaurantdetails-header-container">
      <div className="restaurantdetails-header-container-div1">
        <div>
          <ResNameAddress
            name={name}
            cuisines={cuisines}
            areaName={areaName}
            sla={sla}
          />
        </div>
        <div>
          <RatingAndRatingCount
            avgRating={avgRating}
            totalRatingsString={totalRatingsString}
          />
        </div>
      </div>
      <div className="restaurantdetails-header-container-div2">
        <ResMetaData sla={sla} costForTwoMessage={costForTwoMessage} />
        <VegOnly />
      </div>
    </div>
  );
};

const ResNameAddress = (props) => {
  const { name, cuisines, sla, areaName } = props;
  return (
    <div className="res-name-add-div">
      <h3>{name}</h3>
      <span>{cuisines.join(', ')}</span>
      <span>{areaName + ', ' + sla.lastMileTravelString}</span>
    </div>
  );
};

const RatingAndRatingCount = (props) => {
  const { avgRating, totalRatingsString } = props;
  return (
    <div className="rating-rating-count-container">
      <h5>
        <FontAwesomeIcon icon={faStar} />
        {' ' + avgRating}
      </h5>
      <span>{totalRatingsString}</span>
    </div>
  );
};

const ResMetaData = (props) => {
  const { sla, costForTwoMessage } = props;
  return (
    <div>
      <span>
        <FontAwesomeIcon icon={faClock} /> {sla.slaString || '36 MINS '}
      </span>
      <span>&nbsp;</span>
      <span>
        <FontAwesomeIcon icon={faIndianRupeeSign} />{' '}
        {costForTwoMessage.substring(1, costForTwoMessage.length)}
      </span>
    </div>
  );
};

const VegOnly = () => {
  return (
    <div className="veg-only-switch-container">
      <p>Veg Only</p>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
        <div className="green-red-dot"></div>
      </label>
    </div>
  );
};

export default RestaurantDetailsHeader;
