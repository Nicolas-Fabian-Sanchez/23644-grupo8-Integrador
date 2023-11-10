import { useState,useEffect } from "react";

export const Appi = () => { 

    const [data, setData] = useState([]);
    
    useEffect(()=>{ getMovies();},[])
    
  function getMovies(){

      fetch("https://api.themoviedb.org/3/movie/popular?api_key=9ad816b5e30fc1892635fae8cf7940f2&language=es-MX&page=5")
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData.results)
        })
        .catch((error) => {
          console.log(error);
        },[])
        
  }
  console.log(data)


        return(
            <div className="container d-flex flex-wrap ">

                {data.map((pelicula) => (
                    <div className="card col-2 m-2">
                            <div className = "pelicula card-body" key={pelicula.id}>
                                <img className = "poster card-img"  src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title}/> 
                                <h5 className = "titulo card-title" >{pelicula.title} </h5>
                                </div>
                            </div> ))
                            }
            </div>
        );
                    
    }
    