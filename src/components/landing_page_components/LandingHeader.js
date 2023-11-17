import { useEffect, useState } from 'react';
import { LAT_LANG_URL } from '../../utils/constant';
import useRecommendedPlaces from '../../utils/useRecommendedPlaces';
import { Link } from 'react-router-dom';
import LatLangContext from '../../utils/LatLangContext';
const LandingHeader = () => {
  return (
    <div className="flex justify-end lg:w-[100vw]">
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
    <div className="flex flex-col p-5 gap-5 lg:p-10 lg:m-10 lg:gap-10">
      <div className="flex justify-between items-center">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
            className="w-[150px] md:w-[200px]"
          ></img>
        </div>
        <div>
          <button className="font-bold p-2 md:text-xl">Login</button>

          <button className=" bg-black text-white  font-bold p-2 md:text-xl">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-semibold md:text-2xl">Hungry?</span>
        <span className="text-lg text-gray-500 md:text-xl">
          Order food from your favouite restaurants near you.
        </span>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row  sm:gap-0 sm:relative">
        <input
          className=" border-[1px] border-black w-[400px] p-4 md:text-xl md:w-[450px] "
          type="text"
          placeholder="Enter your delivery location"
          onChange={inputHandler}
        />
        <button className="bg-gray-200 p-2 text-gray-500 sm:absolute sm:bg-transparent sm:left-[290px] sm:top-[10px] md:text-sm md:left-[370px] md:top-[15px]">
          Locate Me
        </button>
        <button className="p-2 bg-orange-400 text-white font-semibold border border-orange-400 md:text-lg">
          FIND FOOD
        </button>
      </div>

      <div className="absolute top-80 bg-white ">
        {listOfCities != undefined &&
          listOfCities.map((city) => {
            return (
              <Link key={city.place_id} to={'/home/' + city.place_id}>
                <SuggestedPlace city={city} />;
              </Link>
            );
          })}
      </div>

      <div className="flex flex-col ">
        <span className="text-gray-400 md:text-[1rem]">
          POPULAR CITIES IN INDIA
        </span>
        <span className="font-[500] md:text-sm">
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
        className="w-[40vw] h-[60vh] hidden sm:block sm:h-[400px] lg:w-[800px] lg:h-[600px]"
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
