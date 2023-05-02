import React, { useState, useEffect, useRef } from "react";
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

/*
Task 9 --> Movie search
Create app for movie search. Use https://www.omdbapi.com/.
*/

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  function searchMovie() {
    fetch(`https://www.omdbapi.com/?apikey=4490a55c&t=${searchTerm}`)
      .then(response => response.json())
      .then(movie => {
        console.log(movie);
      })
  }

  return (
    <div className="App">
      <Header />
      <SearchBar
        setSearchTerm={setSearchTerm}
        onButtonClick={searchMovie}
      />
    </div>
  );
}