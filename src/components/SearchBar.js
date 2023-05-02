import React from "react";
import "./SearchBar.css";

export default function SearchBar({ onButtonClick, setSearchTerm }) {
    return (
        <div className="search-form">
            <input
                type="text"
                placeholder="Enter movie name:"
                className="search-input"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={onButtonClick} className="search-button">
                Search
            </button>
        </div>
    );
}