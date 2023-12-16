import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import axios from "axios";
import Corazon from '../img/red-heart-icon.svg';
import { FirebaseAuthService } from '../services/firebaseAuthService';
import { firebaseServiceFavorites } from '../services/firebaseServiceFavorites';
import { dbCollections } from '../firebaseConfig/collections';
import { RotatingLines } from 'react-loader-spinner';

export const Favorito = () => {
  const [pelicula, setPelicula] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  let [user, setUser] = useState(null);
  let { getAuthUser } = FirebaseAuthService();
  let favIds = [];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserFB = async () => {
      user = await getAuthUser();
      setUser(user);
      return user;
    }


    const obtenerPelicula = async () => {
      const peliculaPromesas = favIds.map(async (data) => {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/${data.idmovie}?api_key=9ad816b5e30fc1892635fae8cf7940f2&language=es-MX`);
        const jsonpelicula = await respuesta.json();
        return jsonpelicula;
      });
      const peliculas = await Promise.all(peliculaPromesas);
      setPelicula(peliculas);
      setLoading(false);
    };

    getUserFB().then((user) => {
      firebaseServiceFavorites.getDocumentByIdUser(dbCollections.Favorites, user.uid).then((favDocs) => {
        favIds = favDocs;
        obtenerPelicula();
      }).catch((error) => {
        console.log(error);
      })
    }).catch((error) => {
      console.log(error);
    })

  }, []);
  //eliminar la pelicula de los favoritos
  const handleEliminarPelicula = (id) => {
    deleteFavorite(id).then((res => {
      const peliculasActualizadas = pelicula.filter((pelicula) => pelicula.id !== id);
      setPelicula(peliculasActualizadas);
    })).catch((error => {

    }))

    //funcionalidad back para eliminar de favoritos del usuario
  };

  const deleteFavorite = async (id) => {
    let doc = { 'idmovie': id.toString(), 'iduser': user.uid };
    try {
      let delMovie = await firebaseServiceFavorites.deleteDocument(dbCollections.Favorites, doc);
    } catch (error) {
      console.log('error ', error);
    }
  }
  // Buscar descarga el poster
  const handleDescargarPoster = (peliculaId) => {
    const imagenPoster = document.getElementById(`poster-${peliculaId}`);
    const url = imagenPoster.src;
    const link = document.createElement('a');
    link.href = url;
    link.download = `poster-${peliculaId}.jpg`;
    link.click();
  };

  //Obtener pelicula actual

  function getDetailMovie(idmovie) {
    let movie = [];

    let urlMovieTrailers = `https://api.themoviedb.org/3/movie/${idmovie}/videos?api_key=9ad816b5e30fc1892635fae8cf7940f2`;

    axios.get(urlMovieTrailers).then((response) => {

      axios.get(urlMovieTrailers).then((response) => {

        if (response.data.results.length > 0) {

          const isOfficialTrailer = (element) => element.name.includes('Official') && element.name.includes('Trailer');
          const index = response.data.results.findIndex(isOfficialTrailer);
          movie.keyTrailer = response.data.results[index].key;

          //setMovie(movie);
          setVideoUrl(`https://www.youtube.com/embed/${movie.keyTrailer}?autoplay=1`);
          setModalIsOpen(true);
        } else {
          setVideoUrl("https://www.youtube.com/embed/Iqr3XIhSnUQ?autoplay=1");
          setModalIsOpen(true);
          console.log('NO encotro trailer');
        }

      }).catch((error) => {
        console.log(error);
      });

    }).catch((error) => {
      console.log(error);
    });
  }





  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (

    <div className='my-5'>
      {!loading &&  <h2 className='text-start mx-5 mb-4'>Favoritos</h2>}
      {loading && 
        <div className="d-flex align-items-center justify-content-center vh-100">
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />
        </div>
       
      } {/* Muestra el spinner mientras loading es true */}
      {!loading && 
      
      (pelicula.map((pelicula) => (
          <div className="card mb-3 mx-5 rounded" key={pelicula.id}>
            <div className="row g-0">
              <div className="col-md-2">
                <img id={`poster-${pelicula.id}`} src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`} className="img-fluid rounded-start m-1" alt="..." />
              </div>
              <div className="col-md-10 d-flex flex-column 
            ">
                <div className="card-body d-flex flex-column  pb-3 align-items-start">
                  <h5 className="card-title fw-bold mb-3">{pelicula.title}</h5>
                  <p className="card-text text-start ">{pelicula.overview}</p>
                </div>
                <div className='d-flex mt-3 g-3 '>
                  <img src={Corazon} alt="Corazon de Favoritos" className='mx-2' onClick={() => handleEliminarPelicula(pelicula.id)} />
                  <button className='btn btn-primary my-3 mx-2' onClick={() => getDetailMovie(pelicula.id)}>Ver Trailer</button>
                  <button className='btn btn-primary my-3 mx-2' onClick={() => handleDescargarPoster(pelicula.id)}>Descargar Poster</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Trailer Modal"
        style={{
          content: {
            width: '90vw', // Ajusta el ancho según tus necesidades (porcentaje)
            height: '90vh', // Ajusta la altura según tus necesidades (porcentaje)
            margin: 'auto', // Centra el modal en la pantalla
            position: 'relative', // Permite posicionar elementos hijos de manera absoluta
            padding: "0px",
            border: "none",
            overflow: "hidden"
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro alrededor del modal
          },
        }}
      >
        <button className=" position-absolute top-0 end-0 btn btn-light rounded-circle fs-1 m-2 fw-bold text-black px-3 shadow-lg  bg-body-tertiary rounded" onClick={closeModal}>X</button>
        <iframe
          title="Trailer"
          width="100%"
          height="100%"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </ReactModal>

    </div>
  );
};
