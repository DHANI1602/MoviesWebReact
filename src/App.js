import React, { useState } from 'react';
import MoviesList from './components/Movies/MoviesList.Component.js';
import SearchMovie from './components/Movies/SearchMovie.Component.js';
import FilterMovies from './components/Movies/FilterMovies.Component.js';
import Footer from './components/Movies/footer/footer.Component.js';
import Header from './components/Movies/header/header.component.js';
import ErrorMessage from './components/Movies/error/message.component.js';
import PrincipalRouter from './routers/PrincipalRouter.js';
import './style.scss';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterChange = (platform) => {
    if (activeFilters.includes(platform)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== platform));
    } else {
      setActiveFilters([...activeFilters, platform]);
    }
  };

  return (
    <div className="layout">
      <Header />
      <section className="content">
        <MoviesList searchTerm={searchTerm} />
      </section>
      <aside className="lateral">
        <SearchMovie handleSearch={handleSearch} />
        <FilterMovies onFilterChange={handleFilterChange} />
      </aside>

      <Footer />
    </div>
  );
};

export default App;
