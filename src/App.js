import { BrowserRouter,Routes,Route } from "react-router-dom";
import List from "./components/List";
import Favourite from "./components/Favourite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}/>
      <Route path="/Favourite" element={<Favourite/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
