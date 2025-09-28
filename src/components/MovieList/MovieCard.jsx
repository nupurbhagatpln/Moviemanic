import React from "react";
import "./MovieCard.css";
import star from "../../assets/glowing-star.png";

const MovieCard = ({ movieData }) => {
  return (
    <a className="movie-card" href="#">
      <img src={movieData.img} alt="movie-poster" className="movie-poster" />
      <div className="movie-details">
        <h3 className="movie-details-heading">{movieData.title}</h3>
        <div className="algn-center movie-date-rate">
          <p>{movieData.releaseDate}</p>
          <p>
            {movieData.rating}
            <img alt="star" src={star} className="rating-img" />
          </p>
        </div>
        <p className="movie-description">{movieData.description}</p>
      </div>
    </a>
  );
};

export default MovieCard;
