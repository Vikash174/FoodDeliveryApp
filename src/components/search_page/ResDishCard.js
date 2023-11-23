import React from 'react';
import { CDN_URL } from '../../utils/constant';

const ResDishCard = (props) => {
  const { cloudinaryId, tagToDisplay, text } = props.searchData;
  return props.searchData === null ? null : (
    <div className="flex p-5 gap-4">
      <div>
        <img className="w-14" src={CDN_URL + cloudinaryId}></img>
      </div>
      <div className="flex flex-col">
        <span>{text}</span>
        <span className="text-gray-400">{tagToDisplay}</span>
      </div>
    </div>
  );
};

export default ResDishCard;
