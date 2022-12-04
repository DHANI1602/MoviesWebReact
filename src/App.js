import React, { useState } from 'react';
import MoviesList from './components/MoviesList.Component.js';
import SearchMovie from './components/SearchMovie.Component.js';
import CreateMovie from './components/createMovie.Component.js';
import Footer from './components/footer/footer.Component.js';
import Navbar from './components/nav/nav.component.js';
import Header from './components/header/header.component.js';
import ErrorMessage from './components/error/message.component.js';
import './style.css';

export default function App() {
  const [listState, setListState] = useState([]);
  const [search, setSearch] = useState('');
  const [nonsearch, setNonSearch] = useState('');
  return (
    <div className="layout">
      <Header />
      <Navbar />
      {nonsearch == true && search.length > 1 && <ErrorMessage />}
      <section className="content">
        <MoviesList listState={listState} setListState={setListState} />
      </section>
      <aside className="lateral">
        <SearchMovie
          listState={listState}
          setListState={setListState}
          nonsearch={nonsearch}
          setNonSearch={setNonSearch}
          search={search}
          setSearch={setSearch}
        />
        <CreateMovie setListState={setListState} />
      </aside>

      <Footer />
    </div>
  );
}
