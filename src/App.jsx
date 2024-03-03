import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import GenrePage from "./pages/GenrePage/GenrePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register"  element={<RegisterPage/>}/>
        <Route path="/genre" element={<GenrePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
