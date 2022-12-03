import React from 'react';
import MoviesList from './components/Movies/MoviesList.Component.js';
import SearchMovie from './components/Lateral/Search/SearchMovie.Component.js';
import CreateMovie from './components/Lateral/Add/createMovie.Component.js';
import Footer from './components/footer/footer.Component.js';
import Navbar from './components/nav/nav.component.js';
import Header from './components/header/header.component.js';
import './style.css';

export default function App() {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <section className="content">
        <MoviesList />
      </section>
      <aside className="lateral">
        <SearchMovie />
        <CreateMovie />
      </aside>

      <Footer />
    </div>
  );
}
