import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CDN_URL, PRE_SEARCH } from '../../utils/constant';
import ResDishCard from './ResDishCard';

const Search = () => {
  const [queryTerm, setQueryTerm] = useState('');

  console.log(queryTerm + 'search page rendered');
  return (
    <div>
      <InputBox queryTerm={queryTerm} />
      <PopularCuisines setQueryTerm={() => setQueryTerm()} />
    </div>
  );
};

const InputBox = () => {
  const latLangObj = useSelector((store) => store.latLng);
  const [searchData, setSearchData] = useState(null);
  const fetchSearchData = async (searchTerm) => {
    const URL = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${latLangObj.latLng.lat}&lng=${latLangObj.latLng.lng}&str=${searchTerm}&trackingId=undefined`;

    const data = await fetch(URL);
    const jsonData = await data.json();
    setSearchData(jsonData);
    console.log(searchData);
  };

  const searchBoxHandler = (e) => {
    if (e.target.value.length > 1) {
      fetchSearchData(e.target.value);
    }
  };

  return (
    <div className="p-5 mx-[250px] text-center ">
      <input
        className="p-4 border border-black w-full"
        placeholder="search for restaurants and foods"
        onChange={searchBoxHandler}
      />

      <div className="absolute">
        {searchData !== null &&
          searchData.data.suggestions.map((suggestion) => {
            return <ResDishCard searchData={suggestion} />;
          })}
      </div>
    </div>
  );
};

const PopularCuisines = (props) => {
  const latLangObj = useSelector((store) => store.latLng);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const URL =
      PRE_SEARCH + `lat=${latLangObj.latLng.lat}&lng=${latLangObj.latLng.lng}`;
    const data = await fetch(URL);
    // console.log(url, data);

    const jsonData = await data.json();

    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data === null ? (
    <h1>Loading...</h1>
  ) : (
    <div className="p-5 mx-[250px] text-center">
      <div className="text-start p-5">
        <PopularCuisinesTitle />
      </div>
      <div className="flex">
        {data.data.cards[1].card.card.gridElements.infoWithStyle.info.map(
          (cuisine) => {
            return (
              <CuisinesImage
                cuisine={cuisine}
                setQueryTerm={props.setQueryTerm}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

const PopularCuisinesTitle = () => {
  return (
    <div>
      <h3 className="text-xl font-bold">Popular Cuisines</h3>
    </div>
  );
};

const CuisinesImage = (props) => {
  const { imageId } = props.cuisine;
  // co.log(props.cuisine);
  const cuisineClickHandler = (cuisineName) => {
    // console.log(cuisineName);
    console.log(props.setQueryTerm());
    props.setQueryTerm();
  };
  return (
    <div>
      <img
        className="w-28 hover:cursor-pointer"
        src={CDN_URL + imageId}
        onClick={() => cuisineClickHandler('Biryani')}
      />
    </div>
  );
};

export default Search;
