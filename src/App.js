import React,{useState, useEffect, useRef} from "react";
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

/*
Task 9 --> Movie search
Create app for movie search. Use https://www.omdbapi.com/.
key=4490a55c
*/

export default function App(){
  return(
    <div className="App">
        <Header />
        <SearchBar />
    </div>
  );
}