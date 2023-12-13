import axios from "axios";
import { useEffect, useState } from "react";
import { link, useParams } from "react-router-dom";
import Corazon from '../img/corazon.svg';

export const DetailMovie = () => {
  const [stateMovie, setMovie] = useState({});
  //const [stateGenres,setGenres] = useState([]);
  const [stateURL, setURL] = useState([]);
  const [stateCast, setCast] = useState([]);
  const [stateCrew, setCrew] = useState([]);

  const params = useParams();
  let idmovie = params.idmovie;
  console.log(idmovie);

  const URL_PATH = "https://image.tmdb.org/t/p/w500";
  const API_KEY = "9ad816b5e30fc1892635fae8cf7940f2";
  const LANGUAGE_US = "en-US";
  const LANGUAGE_ES = "es";

  useEffect(() => {
    //capturar el idioma por defecto del usuario para solicitar trailer y el detalle por el momento esta en es
    getMovieTrailer();
    getDetailMovie();
    getCredits();
  }, []);

  async function getMovieTrailer() {
    let movie = [];
    let urlMovieTrailers = `https://api.themoviedb.org/3/movie/${idmovie}/videos`;

    const params = {
      api_key: API_KEY,
      language: LANGUAGE_US,
    };

    axios
      .get(urlMovieTrailers, { params })
      .then((response) => {
        if (response.data.results.length > 0) {
          //ver
          console.log("encotro trailer");
          const isOfficialTrailer = (element) =>
            (element.name.includes("Official") &&
              element.name.includes("Trailer")) ||
            element.name.includes("Oficial");
          const isTrailer = (element) => element.name.includes("Trailer");
          let index =
            response.data.results.findIndex(isOfficialTrailer) != -1
              ? response.data.results.findIndex(isOfficialTrailer)
              : response.data.results.findIndex(isTrailer);

          movie.keyTrailer = response.data.results[index].key;

          setURL(
            `https://www.youtube.com/embed/${movie.keyTrailer}?autoplay=1`
          );
        } else {
          //url defecto trailer
          setURL("https://www.youtube.com/embed/Iqr3XIhSnUQ?autoplay=1");
          // console.log('no encotro trailer');
        }

        return response;
      })
      .catch((error) => {
        // console.log(error);
      });

    return urlMovieTrailers;
  }

  async function getDetailMovie() {
    let urlMovieDetail = `https://api.themoviedb.org/3/movie/${idmovie}`;
    const params = {
      api_key: API_KEY,
      language: LANGUAGE_ES,
    };

    let res = await axios
      .get(urlMovieDetail, { params })
      .then((response) => {
        console.log(response.data);
        if (response.data.genres.length < 1) {
          response.data.genres = [];
        }

        return response.data;
      })
      .catch((error) => {
        //console.log(error);
      });

    setMovie(res);
    return res;
  }

  async function getCredits() {
    //no implementado ya que no se encuentra como obtener actores principales
    let urlMovieCredits = `https://api.themoviedb.org/3/movie/${idmovie}/credits`;
    const params = {
      api_key: API_KEY,
      language: LANGUAGE_ES,
    };

    let res = await axios
      .get(urlMovieCredits, { params })
      .then((response) => {
        response.data.cast.forEach((actor) => {
          if (actor.known_for_department == "Acting") {
          }
        });
        console.log(response.data.cast);
        console.log(response.data.crew);
        setCast(response.data.cast);
        setCrew(response.data.crew);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return res;
  }

  return (
    <div className="container ">
      <div className="card my-4 bg-light p-2">
        <div className="row">
          <div className="col-lg-6">
            <img
              class="img-fluid custom-image"
              src={`https://image.tmdb.org/t/p/w500/${stateMovie.poster_path}`}
              alt={stateMovie.title}
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between my-4 ">
            <div>
            <div className="">
              <h1>{stateMovie && stateMovie.title}</h1>
            </div>
            <div className="bg-light">
              <div className="d-flex flex-row align-items-center   ">
                <h3>Generos: </h3>
                <div className="d-flex ">

                {stateMovie.genres && stateMovie.genres.length > 0 ? (
                  stateMovie.genres.map((genre) => (
                    <span
                      className=" m-1 h-5 border-0 bg-light"
                      key={genre.id}
                    >
                      {genre.name}
                    </span>
                  ))
                ) : (
                  <span className="m-1 h-5 border-0 bg-light">
                    No encontrado
                  </span>
                )}
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex flex-row align-items-center   ">
                <h3>Fecha de estreno:</h3>
                <span className="m-1 h-5 border-0 bg-light">
                  {" "}
                  {stateMovie.release_date}
                </span>
              </div>
            </div>
            <div>
              <div className="d-flex flex-row align-items-center   ">
                <h3>Países de producción:</h3>
                {stateMovie.production_countries &&
                stateMovie.production_countries.length > 0 ? (
                  stateMovie.production_countries.map((country) => (
                    <span
                      className="m-1 h-5 border-0 bg-light "
                      key={country.iso_3166_1}
                    >
                      {country.name}
                    </span>
                  ))
                ) : (
                  <span className="m-1 h-5 border-0 bg-light">
                    No encontrado
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="d-flex flex-row align-items-center   ">
                <h3>Lenguaje:</h3>
                <span className="m-1 h-5 border-0 bg-light">
                  {" "}
                  {stateMovie.original_language}
                </span>
              </div>
            </div>

            <div>
              <div className="d-flex flex-row align-items-center   ">
                <h3>Rating:</h3>
                <span className="m-1 h-5 border-0 bg-light">
                  {" "}
                  {stateMovie.vote_average}
                </span>
              </div>
            </div>

            <div>
              <div className="d-flex flex-column   ">
                <h3>Descripción:</h3>
                <span className="m-1 h-5 border-0 bg-light">
                  {" "}
                  {stateMovie.overview}
                </span>
              </div>
            </div>
            </div>
            <div className="d-flex flex-row  align-content-start  ">
              <button className="border-0 bg-light  ">
                  <img src={Corazon} alt="favoritos" srcset="" />
              </button>
              <button className="btn btn-success mx-2">
                  Descargar poster
              </button>
              <button className="btn btn-success " type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#trailer">
                  Ver trailer
              </button>

            </div>
          </div>
        </div>
      </div>
      <div class="modal fade p-0" id="trailer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl h-100">
    <div class="modal-content h-100">
      <div class="modal-body p-0">
        <button type="button" class="btn-close position-absolute end-0 border rounded-5 border-3  me-2 mt-2 text-bg-light " data-bs-dismiss="modal" aria-label="Close"></button>
      <iframe
             width="100%"
             height="100%"
              src={stateURL}
              allow="fullscreen"
            ></iframe>
      </div>
      
    </div>
  </div>
</div>
      {/* <div  className="modal fade"
        id="trailer"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog-xl">
          <div className="modal-content">

            <iframe
             className="w-100 h-auto "
              
              src={stateURL}
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DetailMovie;
