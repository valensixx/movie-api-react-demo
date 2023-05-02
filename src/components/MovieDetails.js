import React from "react";
import './MovieDetails.css';

export default function MovieDetails({movie}){
    function renderMovie(){
        return(
            <>
                <h1>{movie.Title}{movie.Year}</h1>
                <img src={movie.Poster}/>
                <p>{movie.imdbRating}</p>
                <p>{movie.Genre}</p>
                <p>{movie.Plot}</p>
                <p>Actors: {movie.Actors}</p>
                <p>Director: {movie.Director}</p>
                <p>Writer: {movie.Writer}</p>
            </>
        );
    }

    return(
        <>
            <div className="movie-info">
                {movie.Title && renderMovie()}
            </div>
        </>
    );
}