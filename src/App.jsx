import { Route, BrowserRouter, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieForm from "./pages/MovieForm";
import GlobalContext from "./contexts/GlobalContext";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{isLoading, setIsLoading}}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout} >
              <Route path="/" Component={Home} />
              <Route path="movies/:id" Component={Movie} />
              <Route path="movies/form" Component={MovieForm} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
