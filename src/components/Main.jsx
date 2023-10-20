import { useState } from "react";
import FilterBox from "./FilterBox";
import SearchResults from "./SearchResults";
import { useEffect } from "react";

function Main() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState({ cat: "All", index: 0 });
  const [features, setFeatures] = useState([]);
  const [range, setRange] = useState(10);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    setFilter({
      location,
      category,
      features,
      range,
    });
  }, [location, category, features, range]);

  return (
    <div className="main">
      <FilterBox
        location={location}
        setLocation={setLocation}
        category={category}
        setCategory={setCategory}
        features={features}
        setFeatures={setFeatures}
        range={range}
        setRange={setRange}
      />
      <SearchResults filter={filter} />
    </div>
  );
}

export default Main;
