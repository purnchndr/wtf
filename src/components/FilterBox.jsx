import { useEffect, useState } from "react";
import Button from "../common/Button";
import style from "./FilterBox.module.css";
function FilterBox(props) {
  const {
    location,
    setLocation,
    category,
    setCategory,
    features,
    setFeatures,
    range,
    setRange,
  } = props;

  useEffect(() => {
    console.log(location, category, features, range);
  }, [location, category, features, range]);

  function setLocationHandeler(e) {
    setLocation(e.target.value);
  }

  function handelRangeChange(e) {
    setRange(+e.target.value);
  }

  function handelFeatureChange(e) {
    const { name, checked } = e.target;
    if (checked) setFeatures((curr) => [...curr, name]);
    else setFeatures((curr) => curr.filter((item) => item !== name));
  }

  function handelReset() {
    setLocation("");
    setCategory({ cat: "All", index: 0 });
    setFeatures([]);
    setRange(10);
  }

  return (
    <div className={style.filterBox}>
      <h2>Location</h2>
      <input
        className={style.locationInput}
        type="text"
        value={location}
        onChange={setLocationHandeler}
        placeholder="Enter Location"
      />
      <h2>Category</h2>
      <div>
        <Button
          onClick={() => setCategory({ cat: "All", index: 0 })}
          inactive={category.cat !== "All"}
        >
          All
        </Button>
        <Button
          onClick={() => setCategory({ cat: "Pro", index: 1 })}
          inactive={category.cat !== "Pro"}
        >
          Pro
        </Button>
        <Button
          onClick={() => setCategory({ cat: "ELLITE", index: 2 })}
          inactive={category.cat !== "ELLITE"}
        >
          ELLITE
        </Button>
        <Button
          onClick={() => setCategory({ cat: "LUXE", index: 3 })}
          inactive={category.cat !== "LUXE"}
        >
          LUXE
        </Button>
      </div>
      <h2>Features</h2>
      <div>
        <div className={style.checkBox}>
          <input
            className={style.checkBoxInput}
            type="checkbox"
            value="1"
            checked={features.includes("Zumba Class")}
            name="Zumba Class"
            onChange={handelFeatureChange}
          />
          <span className={style.checkBoxText}>Zumba Class</span>
        </div>
        <div className={style.checkBox}>
          <input
            className={style.checkBoxInput}
            checked={features.includes("Crossfit Circuite")}
            type="checkbox"
            value="1"
            name="Crossfit Circuite"
            onChange={handelFeatureChange}
          />
          <span className={style.checkBoxText}>Crossfit Circuite</span>
        </div>
        <div className={style.checkBox}>
          <input
            className={style.checkBoxInput}
            checked={features.includes("Cardio Zone")}
            type="checkbox"
            value="1"
            name="Cardio Zone"
            onChange={handelFeatureChange}
          />
          <span className={style.checkBoxText}>Cardio Zone</span>
        </div>
        <div className={style.checkBox}>
          <input
            className={style.checkBoxInput}
            checked={features.includes("Pilatets Studios")}
            type="checkbox"
            value="1"
            name="Pilatets Studios"
            onChange={handelFeatureChange}
          />
          <span className={style.checkBoxText}>Pilatets Studios</span>
        </div>
      </div>
      <h2>Distance in Km</h2>
      <div className={style.filterRange}>
        <div className={style.filterRange}>
          <span
            className={`${style.rangeSpan} ${
              range === 2 ? style.rangeSpanActive : ""
            }`}
          >
            2
          </span>
          <span
            className={`${style.rangeSpan} ${
              range === 4 ? style.rangeSpanActive : ""
            }`}
          >
            4
          </span>
          <span
            className={`${style.rangeSpan} ${
              range === 6 ? style.rangeSpanActive : ""
            }`}
          >
            6
          </span>
          <span
            className={`${style.rangeSpan} ${
              range === 8 ? style.rangeSpanActive : ""
            }`}
          >
            8
          </span>
          <span
            className={`${style.rangeSpan} ${
              range === 10 ? style.rangeSpanActive : ""
            }`}
          >
            Max
          </span>
        </div>
        <input
          className={style.range}
          type="range"
          max="10"
          min="2"
          value={range}
          step="2"
          onChange={handelRangeChange}
        />
      </div>
      <Button onClick={handelReset}>Reset Filters</Button>
      <div className={style.filtertext}>
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
    </div>
  );
}

export default FilterBox;
