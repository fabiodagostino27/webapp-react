import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {

  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
          <Route path="movies/:id" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
