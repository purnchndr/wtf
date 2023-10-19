import ReactStars from "react-rating-stars-component";

import style from "./SearchResults.module.css";

import Button from "../common/Button";
import { useEffect, useState } from "react";
import axios from "axios";

function SearchResults() {
  const [data, setData] = useState([]);
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
    async function getData() {
      const response = await axios.get(
        "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
      );

      setData(await response.data.data);
    }
    getData();
  }, []);

  return (
    <div className={style.searchList}>
      {data.map((curr, i) => (
        <GymCard gym={curr} key={i} />
      ))}
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
        <ReactStars size={23} isHalf={true} value={4.5} edit={false} />
        <p>
          {gym.city}, {gym.address1} {gym.address2}
        </p>
        <p>
          {(gym.duration / 60).toFixed(0)} Hr {(gym.duration % 60).toFixed(0)}
          Min | {gym.distance} KMs
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
