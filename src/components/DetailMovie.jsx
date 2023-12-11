import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export const DetailMovie = () => {

    const [stateMovie, setMovie] = useState({});
    //const [stateGenres,setGenres] = useState([]);
    const [stateURL, setURL] = useState([]);
    const [stateCast, setCast] = useState([]);
    const [stateCrew, setCrew] = useState([]);

    const params = useParams();
    let idmovie = params.idmovie;
    console.log(idmovie);

    const URL_PATH = 'https://image.tmdb.org/t/p/w500';
    const API_KEY = '9ad816b5e30fc1892635fae8cf7940f2';
    const LANGUAGE_US = 'en-US';
    const LANGUAGE_ES = 'es';

    useEffect(() => {
        //capturar el idioma por defecto del usuario para solicitar trailer y el detalle por el momento esta en es
        getMovieTrailer();
        getDetailMovie();
        getCredits();
    }, [])

    async function getMovieTrailer() {
        let movie = [];
        let urlMovieTrailers = `https://api.themoviedb.org/3/movie/${idmovie}/videos`;

        const params = {
            api_key: API_KEY,
            language: LANGUAGE_US
        };

        axios.get(urlMovieTrailers, { params }).then((response) => {
            if (response.data.results.length > 0) {

                //ver 
                console.log('encotro trailer');
                const isOfficialTrailer = (element) => element.name.includes('Official') && element.name.includes('Trailer') || element.name.includes('Oficial');
                const isTrailer = (element) => element.name.includes('Trailer');
                let index = response.data.results.findIndex(isOfficialTrailer) != -1 ? response.data.results.findIndex(isOfficialTrailer) : response.data.results.findIndex(isTrailer);

                movie.keyTrailer = response.data.results[index].key;

                setURL(`https://www.youtube.com/embed/${movie.keyTrailer}?autoplay=1`);


            } else {
                //url defecto trailer
                setURL("https://www.youtube.com/embed/Iqr3XIhSnUQ?autoplay=1");
               // console.log('no encotro trailer');
            }

            return response;
        }).catch((error) => {
           // console.log(error);
        });


        return urlMovieTrailers;
    }

    async function getDetailMovie() {
        let urlMovieDetail = `https://api.themoviedb.org/3/movie/${idmovie}`;
        const params = {
            api_key: API_KEY,
            language: LANGUAGE_ES
        };

        let res = await axios.get(urlMovieDetail, { params }).then((response) => {
            console.log(response.data);
            if (response.data.genres.length < 1) {
                response.data.genres = [];
            }

            return response.data;
        }).catch((error) => {
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
            language: LANGUAGE_ES
        };

        let res = await axios.get(urlMovieCredits, { params }).then((response) => {
            response.data.cast.forEach(actor => {
                if (actor.known_for_department == 'Acting') {

                }

            })
            console.log(response.data.cast);
            console.log(response.data.crew);
            setCast(response.data.cast);
            setCrew(response.data.crew);
            return response.data;
        }).catch((error) => {
            console.log(error);
        });


        return res;
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-lg-12">
                    <h1>{stateMovie && stateMovie.title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <iframe
                            width="100%"
                            height="270px"
                            src={stateURL}
                            allow="fullscreen;"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <img
                        class="img-fluid custom-image"
                        src={`https://image.tmdb.org/t/p/w500/${stateMovie.poster_path}`}
                        alt={stateMovie.title}
                    />
                </div>
                <div className="col-lg-6">
                    <div>
                        <ul class="list-group">
                            <h3>Generos:</h3>
                            {stateMovie.genres && stateMovie.genres.length > 0 ? (
                                stateMovie.genres.map((genre) => (
                                    <li class="list-group-item" key={genre.id}>{genre.name}</li>
                                ))
                            ) : (
                                <li class="list-group-item">No encontrado</li>
                            )}

                        </ul>
                    </div>
                    <div>
                        <ul class="list-group">
                            <h3>Fecha de estreno:</h3>
                            <li class="list-group-item"> {stateMovie.release_date}</li>
                        </ul>
                    </div>
                    <div>
                        <ul class="list-group">
                            <h3>Países de producción:</h3>
                            {stateMovie.production_countries && stateMovie.production_countries.length > 0 ? (
                                stateMovie.production_countries.map((country) => (
                                    <li class="list-group-item" key={country.iso_3166_1}>{country.name}</li>
                                ))
                            ) : (
                                <li class="list-group-item">No encontrado</li>
                            )}

                        </ul>
                    </div>
                    <div>
                        <ul class="list-group">
                            <h3>Lenguaje:</h3>
                            <li class="list-group-item"> {stateMovie.original_language}</li>
                        </ul>
                    </div>

                    <div>
                        <ul class="list-group">
                            <h3>Rating:</h3>
                            <li class="list-group-item">  {stateMovie.vote_average}</li>
                        </ul>
                    </div>

                    <div>
                        <ul class="list-group">
                            <h3>Descripción:</h3>
                            <li class="list-group-item"> {stateMovie.overview}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DetailMovie;