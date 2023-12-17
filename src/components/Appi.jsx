
// paginado infinito

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import '../css/style-swiper.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { link, useParams } from "react-router-dom";

export const Appi = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();
  let [type, setType] = useState('/');

  useEffect(() => {
    type = params.type;
   
    console.log('type ', type);
    type = type == '/'|| type==undefined ? 'movie' : type == 'movie' ? 'movie' : 'tv';
    setType(type);
    console.log(type);
    if (type == 'tv') {

      getMovies(currentPage, type);
    } else {
      getMovies(currentPage, 'movie');
    }
  }, [currentPage]);

  function getMovies(page, type) {
    fetch(
      `https://api.themoviedb.org/3/${type}/popular?api_key=9ad816b5e30fc1892635fae8cf7940f2&language=es-MX&page=${page}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData((prevData) => [...prevData, ...responseData.results]);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }

  return (
    <>
      <Swiper
        initialSlide={0}
        spaceBetween={1}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroup={1}
        slidesPerGroupSkip={1}
        grabCursor={false}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            initialSlide: 15,
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiper.on("reachEnd", () => {
            // Cargar más datos cuando se llega al final
            setCurrentPage((prevPage) => prevPage + 1);
          });
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((pelicula) => (
          <SwiperSlide key={pelicula.id}>
            <Link to={`../detailMovie/${pelicula.id}/${type}`}>
              <div className="pelicula card-body p-0">
                <img
                  className="poster card-img img-fluid"
                  src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                  alt={pelicula.title}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
