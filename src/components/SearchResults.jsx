import ReactStars from "react-rating-stars-component";

import style from "./SearchResults.module.css";

import Button from "../common/Button";
import { useEffect, useState } from "react";
import axios from "axios";

function SearchResults({ filter }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [location, setLocation] = useState({ lat: 0, long: 0 });

  useEffect(() => {
    async function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }
    function showPosition(position) {
      const newLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };

      setLocation(newLocation);
      console.log(newLocation);
    }
    getLocation();
  }, []);

  useEffect(() => {
    async function filterData() {
      if (data.length > 0 && filter) {
        const filterLocation = filter?.location?.toLowerCase().trim();
        let newData = data;
        if (filterLocation) {
          newData = data.filter(
            (curr) =>
              curr.city.toLowerCase().includes(filterLocation) ||
              curr.address1.toLowerCase().includes(filterLocation) ||
              curr.address2.toLowerCase().includes(filterLocation)
          );
        }
        if (filter.range) {
          newData = newData.filter((curr) => {
            if (filter.range === 10) return true;
            else return curr.distance <= filter.range;
          });
        }

        setFilterData(newData || []);
      }
    }
    filterData();
  }, [filter]);

  //`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://devapi.wtfup.me/gym/nearestgym?lat=${location.lat}&long=${location.long}`
      );
      const rawdata = await response.data.data;
      setFilterData(rawdata);
      setData(rawdata);
    }
    getData();
  }, []);

  return (
    <div className={style.searchList}>
      <p>
        Your Cordinates is::
        {`Latitude: ${location.lat} ,Longitude: ${location.long}`}
      </p>

      {filterData.length < 1 ? (
        <Filters filter={filter} />
      ) : (
        filterData.map((curr, i) => <GymCard gym={curr} key={i} />)
      )}
    </div>
  );
}

function Filters({ filter }) {
  const {
    location = "",
    category = { cat: "" },
    features = [],
    range = 10,
  } = filter;
  return (
    <div className={style.filtertext}>
      <h2>No Information found for selected Filters</h2>
      <h3>Try reseting them</h3>
      <p>Location: {location ? location : " Any"}</p>
      <p>Category: {category.cat}</p>
      <p>
        Features:
        {features.length < 1
          ? " None"
          : features.reduce((acc, curr) => `${acc},  ${curr}`, "")}
      </p>
      <p>Distance: {range === 10 ? " Max" : range + " Kms"}</p>
    </div>
  );
}

function GymCard({ gym }) {
  const myStyle = {
    backgroundImage: `url(${gym.cover_image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className={style.gymCard}>
      <div className={style.gymCardPoster} style={myStyle}>
        <span className={style.categoryName}>
          {gym.category_name || "Regular"}
        </span>
        <div className={style.activitySpanHolder}>
          <span className={style.activitySpan}>🏃‍♀️ Zumba</span>
          <span className={style.activitySpan}>🏃‍♀️ Pilates</span>
        </div>
      </div>
      <div className={style.gymCardDetails}>
        <h2>Mass Monster</h2>
        <ReactStars
          size={23}
          isHalf={true}
          value={gym.rating || 4}
          activeColor="red"
          edit={false}
        />
        <p>
          📌 {gym.city}, {gym.address1} {gym.address2}
        </p>
        <p>
          ⌛ {(gym.duration / 60).toFixed(0)} Hr{" "}
          {(gym.duration % 60).toFixed(0)}
          Min | 🚗 {gym.distance} KMs
        </p>
        <div className={style.actionButtonCntnr}>
          <p> &#8377; 1499 / Month</p>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
