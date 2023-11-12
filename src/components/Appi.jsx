import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Appi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9ad816b5e30fc1892635fae8cf7940f2&language=es-MX&page=5"
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  }
  console.log("data -" + data);

  return (
    <div className="container d-flex flex-wrap my-5 justify-content-between ">
      {data.map((pelicula) => (
        <div className="card col-2 m-2 ">
          <Link
            key={pelicula.id}
            to={`detailMovie/${pelicula.id}`}
            className="link-offset-2 link-underline link-underline-opacity-0 text-black "
          >
            <div className="pelicula card-body " key={pelicula.id}>
              <img
                className="poster card-img mb-2"
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                alt={pelicula.title}
              />
              <h5 className="titulo card-title text-truncate ">
                {pelicula.title}{" "}
              </h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
