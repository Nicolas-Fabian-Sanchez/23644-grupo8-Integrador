import logo from "../img/Logo2.png";
import React, { useState, useEffect } from "react";
import { FirebaseAuthService } from "../services/firebaseAuthService";
import Swal from 'sweetalert2';
import { authObserver } from '../helper/Observer';
import { useNavigate } from "react-router-dom";
import googleIcon from "../img/googleIcon.png";

export const Header = () => {
  let { getAuthUser, signIn, handleSignInWithGoogle, signOut } = FirebaseAuthService();
  let [user, setUser] = useState(null);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  
  const getUserFB = async () => {
    user = await getAuthUser();
    setUser(user);
  }

  useEffect(() => {
    getUserFB();
    
    authObserver.subscribe((user) => {
      setUser(user !== null);
      console.log(user);
    });

    return () => {
      authObserver.unsubscribe();
    };

  }, [])

  const handleSignIn = async () => {
    try {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      const userCredential = await signIn(email, password);
      const signedInUser = userCredential.user;
      //console.log('Usuario autenticado con éxito:', signedInUser);
      setError(null);
      user = signedInUser; //ver
      setUser(user);
      
    } catch (error) {
      setError(error.message);
      //console.error('Error al iniciar sesión:', error.message);
    }
  };

  const handleSignInGoogle = async () => {
    try {
      const result = await handleSignInWithGoogle();
      const user = result;
      setUser(user);
      //console.log('Usuario autenticado con Google');
      Swal.fire('', `Bienvenido, ${user.email}!`, 'success');
    } catch (error) {
      //console.error('Error al autenticar con Google:', error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await signOut();
      //console.log('Usuario cerró sesión');
      if (res) {
        setUser(null);
        navigate('/');
      }
    } catch (error) {
      //console.error('Error al cerrar sesión:', error.message);
    }
  };

  if (user) {
    return (

      // botones navbar
      <nav
        className="navbar navbar-expand-lg bg-primary text-light py-md-1"
        data-bs-theme="light"
      >
        <div className="container-fluid ">
          <a className="col-4 col-sm-3 col-md-2 col-lg-1 m-lg-3" href="/">
            <img src={logo} alt="Youmovie" className="w-100" />
          </a>
          <button
            className="navbar-toggler col-lg-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between col-lg-5 "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-evenly  h-100 w-75 ">
              <li className="nav-item ">
                <a
                  className=" btn btn-primary fs-2"
                  // data-bs-target="/"
                  // data-bs-toggle="modal"
                  // type="button"
                  href= "/"
                >
                  Películas{""}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" btn btn-primary fs-2"
                  // data-bs-target="/"
                  // data-bs-toggle="modal"
                  // type="button"
                  href="/"
                >
                  Series{" "}
                </a>
              </li>
              <li>
                <a href="/favoritos" className="btn btn-primary fs-2">
                  Favoritos{" "}
                </a>
              </li>
            </ul>
            <div><p className="m-lg-0 ps-3 p-lg-0">{user.displayName}</p></div>
            <button
              type="button"
              className="btn btn-success mx-2 fs-5 mb-md-2 mb-lg-0"
              onClick={handleSignOut}
            >
              Exit
            </button>
          </div>
        </div>
      </nav>

    );
  } else {
    return (
      // botones navbar
      <nav
        className="navbar navbar-expand-lg bg-primary text-light py-md-0"
        data-bs-theme="light"
      >
        <div className="container-fluid ">
          <a className="col-4 col-sm-3 col-md-2 col-lg-1 m-lg-3" href="/">
            <img src={logo} alt="Youmovie" className="w-100" />
          </a>
          <button
            className="navbar-toggler col-lg-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between col-lg-5 mx-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-evenly  h-100 w-75 ">
              <li className="nav-item ">
                <button
                  className=" btn btn-primary fs-2"
                  data-bs-target="#LogIn"
                  data-bs-toggle="modal"
                  type="button"
                >
                  Películas{" "}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className=" btn btn-primary fs-2"
                  data-bs-target="#LogIn"
                  data-bs-toggle="modal"
                  type="button"
                >
                  Series{" "}
                </button>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-success mx-2 fs-5"
              data-bs-toggle="modal"
              data-bs-target="#LogIn"
            >
              Log In
            </button>
          </div>
        </div>

        {/* modales */}
        <div
          className="modal fade"
          id="LogIn"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content  bg-primary">
              <div className="modal-header border-0 pb-0">
                <button
                  type="button"
                  className="btn-close border border-2 border-black rounded-5 bg-secondary "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0 w-75 mx-auto">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fs-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fs-3">
                    Contraseña
                  </label>
                  <input
                    className="form-control"
                    id="password"
                    type="password"
                  ></input>
                </div>
              </div>
              <div className="modal-footer border-0 flex-column pt-0 pb-5">
                <button
                  type="button"
                  className="btn btn-success mx-auto mb-2 px-5"
                  data-bs-dismiss="modal"
                  onClick={handleSignIn}
                >
                  Aceptar
                </button>
                <div>
                  <a href="./Registrarse" className=" text-white p-2 ">
                    Registrarse
                  </a>
                  <a href="./RecuperoCon" className=" text-white p-2 ">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div  >
                <div className="row">
                  <a className="w-75 row bg-light btn btn-light text-dark my-2 mx-auto text-center align-items-center " onClick={handleSignInGoogle} data-bs-dismiss="modal">
                    <span className="col-9 text-dark m-0">Inciar con Google</span> 
                    <img src={googleIcon} alt="google" srcset="" className="col-2 img-fluid "/>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};
