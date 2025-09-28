import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MovieList from "./components/MovieList/MovieList";
import fire from "./assets/fire.png";
import star from "./assets/glowing-star.png";
import party from "./assets/partying-face.png";

const movieData = [
  {
    img: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_SY679_.jpg",
    title: "Inception",
    releaseDate: "2010-07-16",
    rating: 6,
    description:
      "A thief steals corporate secrets through dream-sharing tech, then must plant an idea instead.",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug&psig=AOvVaw2PrFT-mATKsg_-UHRT_UVC&ust=1755334504718000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDDpuW4jI8DFQAAAAAdAAAAABAE",
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    rating: 7.5,
    description: "Batman takes on the Joker in Gotham’s darkest times.",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg&psig=AOvVaw2XrrVKBqtYOH40t04crA9n&ust=1755334548783000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCd0vi4jI8DFQAAAAAdAAAAABAE",
    title: "Interstellar",
    releaseDate: "2014-11-07",
    rating: 8.6,
    description:
      "Explorers travel through a wormhole seeking humanity’s next home.",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRa9QXcKkW6fhivLE4LjAdeC7CvLFnJk5vRjkK7siVD5TkeXVfU&psig=AOvVaw3Cn7Zjy3fuNOuC10Z60ekp&ust=1755334603956000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjg_ZK5jI8DFQAAAAAdAAAAABAE",
    title: "Parasite",
    releaseDate: "2019-05-30",
    rating: 6.5,
    description:
      "A poor family infiltrates a wealthy household with unexpected consequences.",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTWmKJlXjXTiE9hkekFBy9WCRMf0eKZx2mrsgenlO-qzr9H7v0A&psig=AOvVaw2nbP-jdeL2mpaiEfcOZ6EY&ust=1755334638886000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCQ3aO5jI8DFQAAAAAdAAAAABAE",
    title: "The Godfather",
    releaseDate: "1972-03-24",
    rating: 9.2,
    description:
      "The aging patriarch of a crime dynasty passes control to his reluctant son.",
  },
  {
    img: "https://m.media-amazon.com/images/I/51oBxmV-dML.jpg",
    title: "Pulp Fiction",
    releaseDate: "1994-10-14",
    rating: 8.9,
    description:
      "Interwoven stories of hitmen, a boxer, and crime underworld intrigue.",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRXef9DJnZiq5az0UnjkmvkQufOQ5MFnF7HATYRUXN913swRuH1&psig=AOvVaw3pdDfvJWmigCocHoqf5z5m&ust=1755334678090000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDlkra5jI8DFQAAAAAdAAAAABAE",
    title: "Avengers: Endgame",
    releaseDate: "2019-04-26",
    rating: 8.4,
    description: "The Avengers assemble one last time to undo Thanos’s snap.",
  },
  {
    img: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    title: "The Matrix",
    releaseDate: "1999-03-31",
    rating: 8.7,
    description:
      "A hacker learns reality is a simulation and joins a rebellion.",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTFabKsWv9ru_kpMttjPf2493GGI7L3LpW3XjgPTE9FyHdNDIwV&psig=AOvVaw1Wqoj_fq4NZFNqF0F2GK9f&ust=1755334718994000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiU6cm5jI8DFQAAAAAdAAAAABAE",
    title: "Gladiator",
    releaseDate: "2000-05-05",
    rating: 7.5,
    description:
      "Betrayed Roman general rises as a gladiator to avenge his family.",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQGBz-JQ37g1Ms86Zt0j8xlyCQGat56ylElHzv5hokMpixc7ACP&psig=AOvVaw38rcqsrnHAC63yEfc44MYn&ust=1755334749075000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCgwNi5jI8DFQAAAAAdAAAAABAE",
    title: "Fight Club",
    releaseDate: "1999-10-15",
    rating: 8.8,
    description:
      "An office worker and soapmaker start an underground fighting club.",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTWmKJlXjXTiE9hkekFBy9WCRMf0eKZx2mrsgenlO-qzr9H7v0A&psig=AOvVaw2nbP-jdeL2mpaiEfcOZ6EY&ust=1755334638886000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCQ3aO5jI8DFQAAAAAdAAAAABAE",
    title: "The Godfather",
    releaseDate: "1972-03-24",
    rating: 6.2,
    description:
      "The aging patriarch of a crime dynasty passes control to his reluctant son.",
  },
  {
    img: "https://m.media-amazon.com/images/I/51oBxmV-dML.jpg",
    title: "Pulp Fiction",
    releaseDate: "1994-10-14",
    rating: 8.9,
    description:
      "Interwoven stories of hitmen, a boxer, and crime underworld intrigue.",
  },
];

const App = () => {
  return (
    <div className="app">
      <NavBar />
      {/* <main className="main-content">main Content</main> */}
      <MovieList movieData={movieData} type="popular" title="Popular" emoji={fire} />
      <MovieList movieData={movieData} type="top_rated" title="Top Rated" emoji={star} />
      <MovieList movieData={movieData} type="upcoming" title="Upcoming" emoji={party} />
    </div>
  );
};

export default App;
