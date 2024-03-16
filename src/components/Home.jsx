import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Outlet />
    </>
  );
}

export default Home;
