import Hero from './components/Hero/Hero.js'
import List from './components/List/List.js';
import SearchForm from './components/SearchForm/SearchForm.js'

const App = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
};

export default App;