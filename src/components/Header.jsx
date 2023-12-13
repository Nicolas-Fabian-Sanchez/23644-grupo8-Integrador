import logo from "../img/Logo2.png";

export const Header = () => {
  let logIn = false;

  if (logIn) {
    return (
      
      // botones navbar
      <nav
        className="navbar navbar-expand-lg bg-primary text-light p-0"
        data-bs-theme="light"
      >
        <div className="container-fluid ">
          <a className="col-6 col-lg-3   " href="/">
            <img src={logo} alt="Youmovie" className="w-50" />
          </a>
          <button
            class="navbar-toggler col-lg-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between col-lg-5 mx-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 d-flex justify-content-evenly  h-100 w-75 ">
              <li className="nav-item ">
                <button
                  className=" btn btn-primary fs-2"
                  data-bs-target="/"
                  data-bs-toggle="modal"
                  type="button"
                >
                  Películas{" "}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className=" btn btn-primary fs-2"
                  data-bs-target="/"
                  data-bs-toggle="modal"
                  type="button"
                >
                  Series{" "}
                </button>
              </li>
              <li>
                <a href="/favoritos" className="btn btn-primary fs-2">
                  Favoritos{" "}
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-success mx-2 fs-5 "
              data-bs-toggle="modal"
              data-bs-target=""
              href="/"
            >
              Log out
            </button>
          </div>
        </div>
      </nav>

    );
  } else {
    return (
      // botones navbar
      <nav
        className="navbar navbar-expand-lg bg-primary text-light p-0"
        data-bs-theme="light"
      >
        <div className="container-fluid ">
          <a className="col-6 col-lg-3 m-lg-3  " href="/">
            <img src={logo} alt="Youmovie" className="w-50" />
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
          tabindex="-1"
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
                  <label for="email" className="form-label fs-3">
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
                  <label for="Contraseña" className="form-label fs-3">
                    Contraseña
                  </label>
                  <input
                    className="form-control"
                    id="Contraseña"
                    type="password"
                  ></input>
                </div>
              </div>
              <div className="modal-footer border-0 flex-column pt-0 pb-5">
                <button
                  type="button"
                  className="btn btn-success mx-auto mb-2 px-5"
                  data-bs-dismiss="modal"
                  
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};
