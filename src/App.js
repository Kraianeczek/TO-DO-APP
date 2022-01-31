import Container from './components/Container/Container.js';
import NavBar from './components/NavBAr/NavBar.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';
import Home from './components/Home/Home.js';
import { Routes, Route } from 'react-router-dom';
import MissingPage from './components/MissingPage/MissingPage.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;