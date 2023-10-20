import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import FilterBox from "./components/FilterBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import BenfitsBar from "./components/BenfitsBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={MainLayout} />
    //   </Routes>
    // </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <>
      <Header />
      <SearchBox />
      <div className="main">
        <FilterBox />
        <SearchResults />
      </div>
      <BenfitsBar />
      <Footer />
    </>
  );
}

export default App;
