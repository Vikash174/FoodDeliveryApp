import { useEffect, useState } from 'react';
import useRecommendedPlaces from '../../utils/custom_hooks/useRecommendedPlaces';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const timeout = setInterval(() => {
      setWordIndex(wordIndex + 1);
    }, 2000);
    return () => {
      clearInterval(timeout);
    };
  }, [wordIndex]);

  const wordArray = [
    'Hungry?',
    'Cooking Gone Wrong?',
    'Gaming Night?',
    'Unexpected Guest?',
    'Late night at office?',
    'Movie marathon?'
  ];

  const inputHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const locateMeHandler = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        navigate(
          `home/${position.coords.latitude}+${position.coords.longitude}`
        );
      },
      (error) => {}
    );
  };

  const listOfCities = useRecommendedPlaces(searchTerm);

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
        <span className="text-2xl font-semibold md:text-2xl ">
          {wordArray[wordIndex % wordArray.length]}
        </span>

        <span className="text-lg text-gray-500 md:text-xl">
          Order food from your favouite restaurants near you.
        </span>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row  sm:gap-0 sm:relative">
        <input
          className=" border-[1px] border-orange-500 w-[400px] p-4 md:text-xl md:w-[450px] focus:outline-none"
          type="text"
          placeholder="Enter your delivery location"
          onChange={inputHandler}
        />
        <button
          className="bg-gray-200 p-2 text-gray-500 sm:absolute sm:bg-transparent sm:left-[260px] sm:top-[10px]  md:left-[310px] md:top-[15px] lg:left-[310px] lg:top-[12px] xl:left-[340px] hover:bg-gray-200 flex items-center"
          onClick={locateMeHandler}
        >
          <img
            className="w-4"
            src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Target-icon.png"
          />
          Locate Me
        </button>
        <button className="p-2 bg-orange-400 text-white font-semibold border border-orange-400 md:text-lg ">
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
  const { description } = props.city;

  return (
    <div className="w-96 overflow-hidden whitespace-nowrap p-2 border-b ">
      <span>{description}</span>
    </div>
  );
};

export default LandingHeader;
