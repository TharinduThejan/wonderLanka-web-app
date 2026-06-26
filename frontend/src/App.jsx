import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import DetailPage2 from './pages/DetailPage2.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/detail2/:id" element={<DetailPage2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
