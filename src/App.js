import React, { useState } from 'react';
import MoviesList from './components/Movies/MoviesList.Component.js';
import SearchMovie from './components/Movies/SearchMovie.Component.js';
import CreateMovie from './components/Movies/createMovie.Component.js';
import Footer from './components/Movies/footer/footer.Component.js';
import Navbar from './components/Movies/nav/nav.component.js';
import Header from './components/Movies/header/header.component.js';
import ErrorMessage from './components/Movies/error/message.component.js';
import './style.css';

export default function App() {
  const [listState, setListState] = useState([]);
  const [search, setSearch] = useState('');
  const [nonsearch, setNonSearch] = useState('');
  var rootElement = document.documentElement;
  return (
    <div className="layout">
      <Header />
      <Navbar />
      {nonsearch == true && search.length > 1 && <ErrorMessage />}
      <section className="content">
        <MoviesList
          listState={listState}
          setListState={setListState}
          rootElement={rootElement}
        />
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
