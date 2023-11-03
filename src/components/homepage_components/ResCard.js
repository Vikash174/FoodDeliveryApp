import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CDN_URL } from '../../utils/constant';

const ResCard = (props) => {
  // console.log(props.resData);
  const { name, avgRating, cuisines, sla, cloudinaryImageId, areaName } =
    props.resData.info;
  return (
    <div className="res-card">
      <ResImage imgId={cloudinaryImageId} />
      <ResName resName={name} />
      <Rating_Delivery_time
        rating_deliveryTime={avgRating + ' . ' + sla.deliveryTime}
      />
      <Cuisines cuisines={cuisines} />
      <AreaName areaName={areaName} />
    </div>
  );
};

const ResImage = (props) => {
  const { imgId } = props;
  return (
    <div className="res-image-container">
      <img src={CDN_URL + imgId} />
    </div>
  );
};

const ResName = (props) => {
  const { resName } = props;
  return (
    <div className="res-name-container">
      <h3 style={{ fontStyle: 'itelic' }}>{resName}</h3>
    </div>
  );
};

const Rating_Delivery_time = (props) => {
  const { rating_deliveryTime } = props;
  return (
    <div className="rating-deliverytime-container">
      <h4>
        <FontAwesomeIcon id="star-icon" icon={faStar} />
        {rating_deliveryTime} mins
      </h4>
    </div>
  );
};

const Cuisines = (props) => {
  let { cuisines } = props;
  if (cuisines.length > 4) {
    cuisines = cuisines.slice(0, 2);
    cuisines.push('......');
  }
  return (
    <div className="cuisine-container">
      <span>{cuisines.join(', ')}</span>
    </div>
  );
};

const AreaName = (props) => {
  const { areaName } = props;
  return (
    <div className="cuisine-container">
      <span>{areaName}</span>
    </div>
  );
};

export default ResCard;
