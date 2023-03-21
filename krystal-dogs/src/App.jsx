import React, { useEffect, useState, useTransition } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import FavouriteDogs from "./pages/FavouriteDogs";
import DogGenerator from "./pages/DogGenerator";
import { fetchDogs } from "./api";
function App() {
  const [dogs, setDogs] = useState({ url: "" });
  const [favouriteDogs, setFavourite] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const getData = async () => {
    try {
      setLoading(false);
      const response = await fetchDogs();
      startTransition(() => {
        setDogs({ url: response.url });
      });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    const storedFavourites = localStorage.getItem("favouriteDogs");
    if (storedFavourites) {
      setFavourite(JSON.parse(storedFavourites));
    }
  }, []);

  const DisplayDogs = () => {
    return error ? (
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span>{error.message}</span>
      </div>
    ) : (
      <DogGenerator
        dogs={dogs}
        fetchDogs={getData}
        setFavourite={setFavourite}
        favouriteDogs={favouriteDogs}
      />
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoading ? <p>...Loading</p> : <DisplayDogs />}
          />
          <Route
            path="/faves"
            element={
              <FavouriteDogs
                favouriteDogs={favouriteDogs}
                setFavourite={setFavourite}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
