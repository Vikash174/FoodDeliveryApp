import { CDN_URL } from '../../utils/constant';

const ResCard = (props) => {
  const { name, avgRating, cuisines, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{avgRating}/5</h3>
      <h3>{sla.deliveryTime} mins </h3>
      <h4>{cuisines.join(', ')}</h4>
    </div>
  );
};

export default ResCard;
