import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryItem from './pages/CategoryItem';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:pid" element={<Details />} />
          <Route path="/category/:catId" element={<CategoryItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
