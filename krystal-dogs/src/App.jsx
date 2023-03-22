import React, {
  useEffect,
  useState,
  useTransition,
  lazy,
  Suspense,
} from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import DogGenerator from "./pages/DogGenerator";
import { useDog } from "./contexts/DogContext";
function App() {
  const FavouriteDogs = lazy(() => import("./pages/FavouriteDogs"));
  const { error, isLoading } = useDog();

  const DisplayDogs = () => {
    return error ? (
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span>{error.message}</span>
      </div>
    ) : (
      <DogGenerator />
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
              <Suspense fallback={<div>Loading...</div>}>
                <FavouriteDogs />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
