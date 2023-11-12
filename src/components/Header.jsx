import logo from "../img/Logo2.png";

export const Header = () => {
  let logIn = true;

  if (logIn) {
    return (
      <div className="container-fluid bg-primary d-flex justify-content-around py-2 align-items-center ">
        <a className="col-2  " href="/">
          <img src={logo} alt="Youmovie" className="img-fluid " />
        </a>
        <a className=" btn btn-primary fs-3  " href="/">
          Películas{" "}
        </a>
        <a className=" btn btn-primary fs-3" href="/">
          Series{" "}
        </a>

        <a href="/favoritos" className="btn btn-primary fs-3">
          Favoritos
        </a>

        <a className="btn btn-success " href="/">
          Log out
        </a>
      </div>
    );
  } else {
    return (
      <div className="container-fluid bg-primary d-flex justify-content-around py-2 align-items-center ">
        <a className="col-2 btn btn-primary " href="/">
          <img src={logo} alt="Youmovie" className="w-50" />
        </a>
        <a className=" btn btn-primary fs-3  " href="/">
          Películas{" "}
        </a>
        <a className=" btn btn-primary fs-3" href="/">
          Series{" "}
        </a>

        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#LogIn"
        >
          Log In
        </button>

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
                  <a href="/" className=" text-white p-2 ">
                    Registrarse
                  </a>
                  <a href="/" className=" text-white p-2 ">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
