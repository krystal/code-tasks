import React from "react";
import { LoadDogs } from "../components/LoadDogs";
import { useNavigate } from "react-router-dom";
const FavouriteDogs = ({ favouriteDogs, setFavourite }) => {
  const navigate = useNavigate();
  const ClearFavourites = () => {
    localStorage.setItem("favouriteDogs", "");
    setFavourite([]);
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <header className="bg-white shadow sticky top-0 z-10">
          <div className="flex-1 p-4">
            <button
              className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => navigate("/")}
            >
              Nav back
            </button>
            <button
              className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={ClearFavourites}
            >
              Clear Favourites
            </button>
          </div>
        </header>

        <div class="grid grid-cols-3 items-center gap-4">
          {favouriteDogs.map((dogs) => (
            <LoadDogs dogs={dogs} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavouriteDogs;
