import { useEffect, useState } from 'react';
import { LAT_LANG_URL } from '../../utils/constant';
import useRecommendedPlaces from '../../utils/useRecommendedPlaces';
import { Link } from 'react-router-dom';
import LatLangContext from '../../utils/LatLangContext';
const LandingHeader = () => {
  return (
    <div className="">
      <HeaderNavAndHeadings />
      <LandingLogoImage />
    </div>
  );
};

const HeaderNavAndHeadings = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const inputHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const listOfCities = useRecommendedPlaces(searchTerm);
  // console.log(listOfCities);

  return (
    <div className="">
      <div className="flex">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
            className="w-[200px]"
          ></img>
        </div>
        <div className="">
          <button className="font-bold">Login</button>

          <button className="mx-10 bg-black text-white px-5 py-2 font-bold">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex flex-col mr-12">
        <span className="text-4xl font-semibold">Hungry?</span>
        <span className="text-xl text-gray-500">
          Order food from your favouite restaurants near you.
        </span>
      </div>
      <div className="relative flex ">
        <input
          className="p-5 border border-black w-96"
          type="text"
          placeholder="Enter your delivery location"
          onChange={inputHandler}
        />
        <button className="absolute left-72 top-3 hover:bg-gray-200 p-2">
          Locate Me
        </button>
        <button className="p-5 bg-orange-400 text-white font-semibold border border-orange-400">
          FIND FOOD
        </button>
      </div>

      <div className="absolute top-80 bg-white">
        {listOfCities != undefined &&
          listOfCities.map((city) => {
            return (
              <Link key={city.place_id} to={'/home/' + city.place_id}>
                <SuggestedPlace city={city} />;
              </Link>
            );
          })}
      </div>

      <div className="flex flex-col">
        <span className="text-gray-400">POPULAR CITIES IN INDIA</span>
        <span className="font-[500]">
          Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai
          Pune & more
        </span>
      </div>
    </div>
  );
};

const LandingLogoImage = () => {
  return (
    <div>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
        className="w-[40vw] h-[60vh] min-w-[40vw]"
      />
    </div>
  );
};

const SuggestedPlace = (props) => {
  // console.log(props);
  const { description } = props.city;

  return (
    <div className="w-96 overflow-hidden whitespace-nowrap p-2 border-b ">
      <span>{description}</span>
    </div>
  );
};

export default LandingHeader;
