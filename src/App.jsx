import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import GenrePage from "./pages/GenrePage/GenrePage";
import { HomePage } from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* pages flow will be
      
      register 
      genre
      home 
      ?movies
      
      */}


        <Route path="/"  element={<RegisterPage/>}/>
        <Route path="/genre" element={<GenrePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
