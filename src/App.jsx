import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anasayfa from './pages/Anasayfa';
import Hakkimizda from './pages/Hakkimizda';
import YaziDetay from './pages/YaziDetay';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar /> {/* Navbar her sayfada görünecek */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          {/* Dinamik Rota: ':id' kısmı, bir parametre olduğunu belirtir. */}
          <Route path="/yazi/:id" element={<YaziDetay />} />
          {/* Eşleşmeyen tüm yollar için '*' kullanılır. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;