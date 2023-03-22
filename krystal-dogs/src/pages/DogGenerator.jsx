import React, { Suspense } from "react";
import { LoadDogs } from "../components/LoadDogs";
import { useNavigate } from "react-router-dom";
import { useDog } from "../contexts/DogContext";

const DogGenerator = () => {
  const { favouriteDogs, setFavourite, dogs, getData } = useDog();

  const navigate = useNavigate();
  const addFavourite = (dogs, setFavourite) => {
    if (favouriteDogs.includes(dogs.url)) {
      alert("You have already added dog to favourites!");
      return;
    }
    navigate("/faves");
    const updatedFavourites = [...favouriteDogs, dogs.url];
    setFavourite(updatedFavourites);
    localStorage.setItem("favouriteDogs", JSON.stringify(updatedFavourites));
  };

  return (
    <div>
      <button
        className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={getData}
      >
        Generate Dog
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={addFavourite(dogs, setFavourite)}
      >
        Add to favourites
      </button>
      <Suspense fallback={<h2> ...Loading</h2>}>
        {<LoadDogs dogs={dogs} />}
      </Suspense>
    </div>
  );
};

export default DogGenerator;
