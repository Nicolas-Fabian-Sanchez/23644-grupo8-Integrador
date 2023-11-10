import Corazon from '../img/corazon.svg';
import React, { useEffect, useState } from 'react';

export const Favorito = ({ ids }) => {

    const [pelicula, setPelicula] = useState([]);

    useEffect(() => {
        const obtenerPelicula = async () => {
            const peliculaPromesas = ids.map(async (numero) => {
                const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${numero}?api_key=9ad816b5e30fc1892635fae8cf7940f2&language=es-MX`);
                const jsonpelicula = await respuesta.json();
                return jsonpelicula;
            });

            const pelicula = await Promise.all(peliculaPromesas);
            setPelicula(pelicula);
        };

        obtenerPelicula();
    }, []);





    return (
        <div>
            <h2>FAVORITOS</h2>
            {pelicula.map((pelicula) => (
                <div className="card mb-3 cardFavorito rounded" key={pelicula.id}>
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} className="img-fluid rounded-start m-1" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{pelicula.title}</h5>
                                <p className="card-text">{pelicula.overview}</p>
                                <img src={Corazon} alt="Corazon de Favoritos" />
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <button className='btn btn-primary mt-3 m-2'>Ver Trailer</button>
                            <button className='btn btn-primary mt-3 m-2'>Descargar Poster</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};