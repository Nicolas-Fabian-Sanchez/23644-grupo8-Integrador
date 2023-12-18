import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import Corazon from '../img/red-heart-icon.svg';
import { FirebaseAuthService } from '../services/firebaseAuthService';
import { firebaseServiceFavorites } from '../services/firebaseServiceFavorites';
import { dbCollections } from '../firebaseConfig/collections';
import { RotatingLines } from 'react-loader-spinner';

ReactModal.setAppElement('#root');

export const Favorito = () => {
  const [pelicula, setPelicula] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState('');
  let [user, setUser] = useState(null);
  let { getAuthUser } = FirebaseAuthService();
  let favIds = [];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserFB = async () => {
      user = await getAuthUser();
      setUser(user);
      return user;
    };

    const obtenerPelicula = async () => {
      if (favIds !== null) {
        const peliculaPromesas = favIds.map(async (data) => {
          const respuesta = await fetch(
            `https://api.themoviedb.org/3/${data.type}/${data.idmovie}?api_key=9ad816b5e30fc1892635fae8cf7940f2&language=es-MX`
          );
          let jsonpelicula = await respuesta.json();
          jsonpelicula.type = data.type;
          jsonpelicula.trailer = await getTrailer(data.idmovie, data.type);
          console.log(jsonpelicula);
          return jsonpelicula;
        });

        const peliculas = await Promise.all(peliculaPromesas);
        setPelicula(peliculas);
      }
      setLoading(false);
    };

    getUserFB()
      .then((user) => {
        firebaseServiceFavorites
          .getDocumentByIdUser(dbCollections.Favorites, user.uid)
          .then((favDocs) => {
            favIds = favDocs;
            obtenerPelicula();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEliminarPelicula = (id) => {
    deleteFavorite(id)
      .then((res) => {
        const peliculasActualizadas = pelicula.filter(
          (pelicula) => pelicula.id !== id
        );
        setPelicula(peliculasActualizadas);
      })
      .catch((error) => {});
  };

  const deleteFavorite = async (id) => {
    let doc = { idmovie: id.toString(), iduser: user.uid };
    try {
      let delMovie = await firebaseServiceFavorites.deleteDocument(
        dbCollections.Favorites,
        doc
      );
    } catch (error) {
      console.log('error ', error);
    }
  };

  const handleDescargarPoster = (peliculaId) => {
    const imagenPoster = document.getElementById(`poster-${peliculaId}`);
    const url = imagenPoster.src;
    const link = document.createElement('a');
    link.href = url;
    link.download = `poster-${peliculaId}.jpg`;
    link.click();
  };

  async function getTrailer(id, type) {
    let urlTrailers = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=9ad816b5e30fc1892635fae8cf7940f2`;
    let urlTrailer = axios
      .get(urlTrailers)
      .then((response) => {
        if (response.data.results.length > 0) {
          const isOfficialTrailer = (element) =>
          (element.name.includes("Official") &&
            element.name.includes("Trailer")) ||
          element.name.includes("Oficial");
        const isTrailer = (element) => element.name.includes("Trailer");
        let index =
          response.data.results.findIndex(isOfficialTrailer) != -1
            ? response.data.results.findIndex(isOfficialTrailer)
            : response.data.results.findIndex(isTrailer);
          if (
            response.data.results[index] != undefined &&
            response.data.results[index].key != null &&
            response.data.results[index].key != '' &&
            index !== -1
          ) {
            return `https://www.youtube.com/embed/${response.data.results[index].key}?autoplay=1`;
          } else {
            return '';
          }
        }
      })
      .catch((error) => {
        console.log(error);
        return '';
      });
    return urlTrailer;
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='my-5'>
      {!loading && pelicula.length > 0 && (
        <h2 className='text-start mx-5 mb-4'>Favoritos</h2>
      )}

      {loading && (
        <div className='d-flex align-items-center justify-content-center vh-100'>
          <RotatingLines
            strokeColor='grey'
            strokeWidth='5'
            animationDuration='0.75'
            width='96'
            visible={true}
          />
        </div>
      )}

      {!loading &&
        pelicula.length > 0 ? (
          pelicula.map((pelicula) => (
            <div className='card mb-3 mx-5 rounded' key={pelicula.id}>
              <div className='row g-0'>
                <div className='col-md-2'>
                  <img
                    id={`poster-${pelicula.id}`}
                    src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
                    className='img-fluid rounded-start m-1'
                    alt='...'
                  />
                </div>
                <div className='col-md-10 d-flex flex-column'>
                  <div className='card-body d-flex flex-column  pb-3 align-items-start'>
                    <h5 className='card-title fw-bold mb-3'>{pelicula.title}</h5>
                    <p className='card-text text-start '>{pelicula.overview}</p>
                  </div>
                  <div className='d-flex mt-3 g-3 '>
                    <img
                      src={Corazon}
                      alt='Corazon de Favoritos'
                      className='mx-2'
                      onClick={() => handleEliminarPelicula(pelicula.id)}
                    />
                    {pelicula.trailer !== '' && (
                      <button
                        className='btn btn-primary my-3 mx-2'
                        onClick={() => {setSelectedTrailer(pelicula.trailer);  setModalIsOpen(true);}}
                      >
                        Ver Trailer
                      </button>
                    )}
                    <button
                      className='btn btn-primary my-3 mx-2'
                      onClick={() => handleDescargarPoster(pelicula.id)}
                    >
                      Descargar Poster
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='d-flex align-items-center justify-content-center vh-50'>
            <h3 className='card-title fw-bold mb-3'>
              No tienes favoritos guardados
            </h3>
          </div>
        )}

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Trailer Modal'
        style={{
          content: {
            width: '90vw',
            height: '90vh',
            margin: 'auto',
            position: 'relative',
            padding: '0px',
            border: 'none',
            overflow: 'hidden',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <button
          className='position-absolute top-0 end-0 btn btn-light rounded-circle fs-1 m-2 fw-bold text-black px-3 shadow-lg  bg-body-tertiary rounded'
          onClick={closeModal}
        >
          X
        </button>
        <iframe
          title='Trailer'
          width='100%'
          height='100%'
          src={selectedTrailer}
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </ReactModal>
    </div>
  );
};
