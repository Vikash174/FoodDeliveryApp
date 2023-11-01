import ResCard from './ResCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    let cards = json.data.cards;
    cards = cards.filter((card) => {
      if (card.card.card.id === 'restaurant_grid_listing') {
        return card;
      }
    });
    const resListFromApi =
      cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRes(resListFromApi);
    setfilteredResList(resListFromApi);
  };

  // Conditional Rendering

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body-nav-item-container">
        <div className="search-div">
          <input
            type="text"
            id="search-input-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            id="search-btn"
            onClick={() => {
              const fliteredList = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              if (fliteredList.length > 0) {
                setfilteredResList(fliteredList);
              } else {
                setSearchText('could not find matching result');
              }
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-div">
          <button
            className="filter-btn"
            onClick={() => {
              const fliteredList = listOfRes.filter(
                (res) =>
                  //   console.log(res.info.avgRating > 4);
                  res.info.avgRating > 4
              );

              setfilteredResList(fliteredList);
            }}
          >
            ⭐Top Rated Restaurants
          </button>
        </div>

        <div className="all-res-list-div">
          <button
            className="all-res-btn"
            onClick={() => {
              setfilteredResList(listOfRes);
            }}
          >
            See all Restaurants
          </button>
        </div>
      </div>

      <div className="restaurants-card-container">
        {filteredResList.map((res) => {
          return (
            <Link
              key={res.info.id}
              to={'restaurants/' + res.info.id}
              id={'res-link'}
            >
              <ResCard resData={res} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
