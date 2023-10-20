import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import FilterBox from "./components/FilterBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import BenfitsBar from "./components/BenfitsBar";
import Main from "./components/Main";
import GymDetails from "./components/GymDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/gym/:gymid" element={<DetailsLayout />}></Route>
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={MainLayout} />
    //   </Routes>
    // </BrowserRouter>
  );
}

function DetailsLayout() {
  const { gymid } = useParams();
  return (
    <>
      <Header backbutton={true} />
      <GymDetails id={gymid} />
      <h2> Hello {gymid} </h2>
      <Footer />
    </>
  );
}

function MainLayout() {
  return (
    <>
      <Header />
      <SearchBox />
      <Main />
      <BenfitsBar />
      <Footer />
    </>
  );
}

export default App;
