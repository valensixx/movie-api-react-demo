import React, { useState, useEffect, useRef } from "react";
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieDetails from "./components/MovieDetails";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Axios from "./Axios";

/*
Task 9 --> Movie search
Create app for movie search. Use https://www.omdbapi.com/.
*/

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movie, setMovie] = useState({});

  function searchMovie() {
    fetch(`https://www.omdbapi.com/?apikey=4490a55c&t=${searchTerm}`)
      .then(response => response.json())
      .then(movie => {
        setMovie(movie);
        //console.log(movie);
      })
  }

  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <SearchBar
        setSearchTerm={setSearchTerm}
        onButtonClick={searchMovie}
      />
      <MovieDetails movie={movie} />
      <Axios/>
    </div>
  );
}