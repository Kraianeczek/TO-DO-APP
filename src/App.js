import Container from './components/Container/Container.js';
import NavBar from './components/NavBAr/NavBar.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';
import Home from './components/Home/Home.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
      </Container>
      <About />
      <Favorite />
    </main>
  );
};

export default App;