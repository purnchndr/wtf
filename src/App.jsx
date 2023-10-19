import "./App.css";
import FilterBox from "./components/FilterBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <>
      <Header />
      <SearchBox />
      <div className="main">
        <FilterBox />
        <SearchResults />
      </div>
      <Footer />
    </>
  );
}

export default App;
