import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ movieData, title, emoji, type }) => {
  const [movies, setMovie] = useState(movieData);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(movies, [sort.by], [sort.order]);
      setMovie(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = () => {
    setMovie(movieData);
  };

  const handleFilter = (rate) => {
    if (rate == minRating) {
      setMinRating(0);
      setMovie(movieData);
    } else {
      setMinRating(rate);
      const filterMovie = movieData.filter((movie) => movie.rating >= rate);
      setMovie(filterMovie);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  console.log(sort);
  return (
    <section className="move_list" id={type}>
      <header className="movie-list-header">
        <h2 className="movie-list-heading">
          {title}
          <img alt={`${emoji} icon`} src={emoji} className="nav-bar-img" />
        </h2>
        <div className="algn-center movie-list-fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6, 5]}
          />

          <select
            name="by"
            id=""
            value={sort.by}
            onChange={handleSort}
            className="movie-sorting"
          >
            <option value="default">Sort By</option>
            <option value="releaseDate">Date</option>
            <option value="rating">Rating</option>
          </select>

          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie-sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie-cards">
        {movies.map((item, index) => (
          <MovieCard key={index} movieData={item} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
