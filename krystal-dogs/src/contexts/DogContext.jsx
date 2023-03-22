import React, { useContext, useState, useEffect, useTransition } from "react";
import { fetchDogs } from "../api";
const AuthContext = React.createContext();
export function useDog() {
  return useContext(AuthContext);
}

export function DogContext({ children }) {
  const [dogs, setDogs] = useState({ url: "", byte: "" });
  const [favouriteDogs, setFavourite] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  useEffect(() => {
    const storedFavourites = localStorage.getItem("favouriteDogs");
    if (storedFavourites) {
      setFavourite(JSON.parse(storedFavourites));
    }
  }, []);
  const getData = async () => {
    try {
      setLoading(false);
      const response = await fetchDogs();
      startTransition(() => {
        setDogs({ url: response.url, byte: response.fileSizeBytes });
      });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const value = {
    favouriteDogs,
    setFavourite,
    dogs,
    setDogs,
    error,
    setError,
    isLoading,
    setLoading,
    isPending,
    startTransition,
    getData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
