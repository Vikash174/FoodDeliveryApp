import { CDN_URL } from '../../../utils/constant';

const RestaurantDetails = (props) => {
  const { name, areaName, cloudinaryImageId } =
    props.resDetails.data.cards[0].card.card.info;
  return (
    <div className="flex gap-2">
      <div className="res-image">
        <ResLogo cloudinaryImageId={cloudinaryImageId} />
      </div>
      <div className="flex flex-col">
        <ResTitle name={name} />
        <ResFirstAdderess areaName={areaName} />
      </div>
    </div>
  );
};

const ResLogo = (props) => {
  const { cloudinaryImageId } = props;
  return <img src={CDN_URL + cloudinaryImageId} className="w-12 h-12" />;
};

const ResTitle = (props) => {
  const { name } = props;
  return (
    <div className="text-sm">
      <h3>{name}</h3>
    </div>
  );
};

const ResFirstAdderess = (props) => {
  const { areaName } = props;
  return (
    <div className="text-xs">
      <span>{areaName}</span>
    </div>
  );
};

export default RestaurantDetails;
