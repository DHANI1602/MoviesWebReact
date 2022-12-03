import React, { useState } from 'react';
import MoviesList from './components/MoviesList.Component.js';
import SearchMovie from './components/SearchMovie.Component.js';
import CreateMovie from './components/createMovie.Component.js';
import Footer from './components/footer/footer.Component.js';
import Navbar from './components/nav/nav.component.js';
import Header from './components/header/header.component.js';
import './style.css';

export default function App() {
  const [listState, setListState] = useState([]);
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
