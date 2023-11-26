import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CDN_URL, PRE_SEARCH, proxyUrl } from '../../utils/constant';
import ResDishCard from './ResDishCard';

const Search = () => {
  const [queryTerm, setQueryTerm] = useState('');

  return (
    <div>
      <InputBox queryTerm={queryTerm} />
      <PopularCuisines setQueryTerm={() => setQueryTerm()} />
    </div>
  );
};

const InputBox = () => {
  return (
    <div className="p-3 text-center md:mx-[200px]">
      <input
        className="p-2 border border-black w-full"
        placeholder="search for restaurants and foods"
        onChange={searchBoxHandler}
      />

      <div className="absolute">
        {searchData !== null && searchData.data.suggestions.length === 0 && (
          <ResDishCard
            searchData={{
              cloudinaryId: '',
              tagToDisplay: 'Nothing Found',
              text: 'Service Unavailable for now'
            }}
          />
        )}
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
    const data = await fetch(proxyUrl + URL);
    const jsonData = await data.json();

    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data === null ? (
    <h1>Loading...</h1>
  ) : (
    <div className="text-center my-10 md:mx-[200px]">
      <div className="text-start">
        <PopularCuisinesTitle />
      </div>
      <div className="flex">
        {data.data.cards.length === 2 &&
          data.data.cards[1].card.card.gridElements.infoWithStyle.info.map(
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
      <h3 className="p-1 text-sm font-bold ">Popular Cuisines</h3>
    </div>
  );
};

const CuisinesImage = (props) => {
  const { imageId } = props.cuisine;
  return (
    <div>
      <img className="w-28 hover:cursor-pointer" src={CDN_URL + imageId} />
    </div>
  );
};

export default Search;
