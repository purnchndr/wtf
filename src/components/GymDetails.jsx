import { useState } from "react";
import ReactStars from "react-rating-stars-component";

import style from "./GymDetails.module.css";
import { useEffect } from "react";
import axios from "axios";
import Button from "../common/Button";
import facility from "../assets/facilities.jpg";

function GymDetails({ id }) {
  const [data, setData] = useState([]);
  const [planData, setPlanData] = useState([]);
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
        `https://devapi.wtfup.me/gym/nearestgym?lat=${location.lat}&long=${location.long}`
      );
      const rawdata = await response.data.data;
      const onedata = rawdata.filter((curr) => curr.user_id === id)[0];
      setData(onedata || []);
    }
    getData();
  }, [id, location]);

  useEffect(() => {
    async function getPlanData() {
      const response = await axios.post("https://devapi.wtfup.me/gym/plan", {
        body: { gym_id: id },
      });
      const rawdata = await response.data.data;
      setPlanData(rawdata);
      console.log(rawdata);
    }
    getPlanData();
  }, [id]);

  return (
    <div>
      <div className={style.detailsPage}>
        <div className={style.nameCntnr}>
          <h1 className={style.name}>{data.gym_name}</h1>
          <p className={style.address}>
            📌 {data.city}, {data.address1}, {data.address2}
          </p>
          <Button>Navigate</Button>
          <h4 className={style.description}>Description</h4>
          <p>{data.description}</p>
        </div>
        <div className={style.actionCntnr}>
          <Button>🎢 View LeaderBord</Button>
          <ReactStars
            classNames={style.starts}
            size={23}
            isHalf={true}
            value={data.rating || 5}
            activeColor="red"
            edit={false}
          />
          <p className={style.totalrating}>{data.total_rating} Ratings</p>
        </div>
      </div>

      <div className={style.benfitsAndPlans}>
        <div className={style.features}>
          <img src={facility} alt="features" />
        </div>
        <div className={style.plans}>
          <h3>Choose Membership</h3>
          <div>
            <Button>General</Button>
            <Button inactive={true}>Goal Focused</Button>
          </div>
          <div>
            <div>
              <div>
                <h1>Monthly</h1>
                <p>fdnfjfjlfjfdjkfhdjfhdjf</p>
              </div>
              <div>
                <span>&#8377;</span>
                <p>1900</p>
                <span>70 day</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.adctionButtons}>
        <Button inactive={true}>Book One day Free Session</Button>
        <Button>Buy Now</Button>
      </div>
      <h1 className={style.browse}>Browse all Plans</h1>
      <div className={style.plancntnr}>
        {planData.map((curr, i) => (
          <PlanCard plan={curr} key={i} />
        ))}
      </div>

      <img className={style.poster} src={data.cover_image} alt="poster" />
    </div>
  );
}

function PlanCard({ plan }) {
  return (
    <div className={style.plancard}>
      <div className={style.planmain}>
        <h3>{plan.plan_name}</h3>
        <p>{plan.description}</p>
      </div>
      <div className={style.planmain2}>
        <p>&#8377; {plan.plan_price}/ Month</p>
        <p>⌛{plan.duration}</p>
        <p>🏋️{plan.trainer_name || "Not Available"}</p>
      </div>
    </div>
  );
}

export default GymDetails;
