import { Route, BrowserRouter, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout} >
            <Route path="/" Component={Home} />
            <Route path="movies/:id" Component={Movie} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
