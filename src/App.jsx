import { Route, BrowserRouter, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <> 
      <BrowserRouter>
        <Routes component={DefaultLayout} >
          <Route path="/"/>
          <Route path="movies/:id" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
