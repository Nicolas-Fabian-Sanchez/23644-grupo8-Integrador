import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const DetailMovie = () => {

    const [stateMovie, setMovie] = useState([]);
    const [stateURL, setURL] = useState([]);


    const params = useParams();
    let idmovie = params.idmovie;
    console.log(idmovie);

    const URL_PATH = 'https://image.tmdb.org/t/p/w500';
    const API_KEY = '9ad816b5e30fc1892635fae8cf7940f2';

    useEffect(() => {
        console.log('detail');
        getDetailMovie();
    }, [])

    function getDetailMovie() {
        let movie = [];

        let urlMovieTrailers = `https://api.themoviedb.org/3/movie/${idmovie}/videos?api_key=9ad816b5e30fc1892635fae8cf7940f2`;
        
        axios.get(urlMovieTrailers).then((response) => {

            axios.get(urlMovieTrailers).then((response) => {

                if (response.data.results.length > 0) {
                    console.log('encotro trailer');
                    const isOfficialTrailer = (element) => element.name.includes('Official') && element.name.includes('Trailer');
                    const index = response.data.results.findIndex(isOfficialTrailer);  
                    movie.keyTrailer = response.data.results[index].key;
                  
                    setMovie(movie);
                    setURL(`https://www.youtube.com/embed/${movie.keyTrailer}?autoplay=1`);

                } else {
                    setURL("https://www.youtube.com/embed/Iqr3XIhSnUQ?autoplay=1");
                    console.log('NO encotro trailer');
                }

            }).catch((error) => {
                console.log(error);
            });

        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div id='container-detail'>
            {
                 <div className="card m-auto m-2" style={{ width: "18rem" }}   id="movieDetail">
                    <iframe width="100%" height="100%"
                        src={stateURL} allow="fullscreen;">
                    </iframe>
                </div>
            }
        </div>
    )
}

export default DetailMovie;