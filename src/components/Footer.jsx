import linkedInLogo2 from "../img/LinkedInLogo2.png";
import jsLogo from "../img/JsLogo2.png";
import htmLogo from "../img/htmlLogo2.png";
import cssLogo from "../img/CssLogo.png";
import reactLogo from "../img/reactLogo.png";
import firebaseLogo from "../img/firebase.png";
import apiLogo from "../img/API.png";
import boostrapLogo from "../img/BootstrapLogo.png";
import html2canvasLogo from "../img/html2canvas.png";

export let Footer = () => {
  return (
    <div className="container-fluid bg-primary d-flex flex-column align-items-center  flex-md-row flex-wrap pb-3  justify-content-center justify-content-md-around  ">

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#Sobre-nosotros"
      >
        <p className="m-0 fs-4">Sobre nosotros</p>
      </button>
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#Tecnologias-utilizadas"
      >
        <p className="m-0 fs-4">Tecnologías utilizadas</p>
      </button>
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#Documentacion"
      >
        <p className="m-0 fs-4">Documentación</p>
      </button>
      <button
        type=""
        className=" w-25 p-0 bg-primary border-0 "
        data-bs-toggle="modal"
        data-bs-target="#LinedIn"
      >
        <img
          src={linkedInLogo2}
          alt="LinkedIn"
          srcSet=""
          className=" img-fluid"
          />
      </button>
      <div
        className="modal fade"
        id="Sobre-nosotros"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content pb-3">
            <div className="modal-header flex-column-reverse border-bottom-0 pb-0 ">
              <h1
                className="modal-title fs-5 text-center border-bottom border-danger w-75 pb-2"
                id="exampleModalLabel"
              >
                Sobre nosotros
              </h1>
              <button
                type="button"
                className="btn-close border rounded-5 border-3 border-black "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-bold text-start">
              Somos estudiantes del programa Codo a Codo capacitandonos en el
              uso de React.js por medio de uso de componentes, react hooks y
              diseño modular de single page, aplicando los conocimientos a un
              proyecto propuesto por nuestra docente en el cual estamos
              realizando un sitio web de películas totalmente integrado con
              React.js y otras tecnologías detalladas en el proyecto.
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="Documentacion"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content pb-3">
            <div className="modal-header flex-column-reverse border-bottom-0 pb-0 ">
              <h1
                className="modal-title fs-5 text-center border-bottom border-danger w-75 pb-2"
                id="exampleModalLabel"
              >
                Documentación
              </h1>
              <button
                type="button"
                className="btn-close border rounded-5 border-3 border-black "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">ejemplo</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="Tecnologias-utilizadas"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="modal-header flex-column-reverse border-bottom-0 pb-0 ">
              <h1
                className="modal-title fs-5 text-center border-bottom border-danger w-75 pb-2"
                id="exampleModalLabel"
              >
                Tecnologías utilizadas
              </h1>
              <button
                type="button"
                className="btn-close border rounded-5 border-3 border-black "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container  ">
              <div className="row justify-content-center mb-4 ">
                <img
                  src={jsLogo}
                  alt=""
                  className=" img-fluid col-3 border-0 "
                />
                <img
                  src={cssLogo}
                  alt=""
                  className=" img-fluid col-3 border-0 h-100"
                />
                <img
                  src={htmLogo}
                  alt=""
                  className=" img-fluid col-3 border-0 h-100"
                />
              </div>
              <div className="row justify-content-center  mb-4">
                <img
                  src={boostrapLogo}
                  alt=""
                  className=" img-thumbnail col-3 border-0"
                />
                <img
                  src={reactLogo}
                  alt=""
                  className=" img-thumbnail  col-3 border-0"
                />
                <div className="col-3 bg-success px-1 border-0 ">
                  <img
                    src={html2canvasLogo}
                    alt=""
                    className="img-fluid w-75 "
                  />
                  <p className="m-0 text-white ">Html2canvas</p>
                </div>
              </div>
              <div className="row justify-content-center mb-4">
                <img src={firebaseLogo} alt="" className="col-10" />
              </div>
              <div className="row flex-column ">
                <div className="d-flex align-items-center justify-content-around ">
                  <img src={apiLogo} alt="" className="img-fluid col-3" />
                  <p className="col-7 fw-bold fs-5">
                    TSMD (https://api.themoviedb.org/)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="LinedIn"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content pb-3">
            <div className="modal-header flex-column-reverse border-bottom-0 pb-0">
              <div className="w-75 border-bottom border-danger text-center  ">
                <img
                  src={linkedInLogo2}
                  alt="Linkedin"
                  className="modal-title fs-5 px-auto align-self-center img-fluid w-75"
                  id="exampleModalLabel"
                />
              </div>

              <button
                type="button"
                className="btn-close border rounded-5 border-3 border-black "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-auto d-flex flex-column ">
              <a
                href="http://www.linkedin.com/in/jonathan-galimberti-developer"
                target="_blank"
                rel="noreferrer"
                className="link-underline link-underline-opacity-0 link-dark fw-bold ms-4"
              >
                Jonathan Galimberti
              </a>
              <a
                href="https://www.linkedin.com/in/franco-benitez-579268259/"
                target="_blank"
                rel="noreferrer"
                className="link-underline link-underline-opacity-0 link-dark fw-bold ms-4"
              >
                Franco Benitez
              </a>
              <a
                href="https://www.linkedin.com/in/miltonmurguia/"
                target="_blank"
                rel="noreferrer"
                className="link-underline link-underline-opacity-0 link-dark fw-bold ms-4"
              >
                Milton Murguia
              </a>
              <a
                href="https://www.linkedin.com/in/nicolas-s%C3%A1nchez-894b00257/"
                target="_blank"
                rel="noreferrer"
                className="link-underline link-underline-opacity-0 link-dark fw-bold ms-4"
              >
                Nicolas Sanchez
              </a>
              <a
                href="https://www.linkedin.com/in/arriagadamaximiliano/"
                target="_blank"
                rel="noreferrer"
                className="link-underline link-underline-opacity-0 link-dark fw-bold ms-4"
              >
                Maximiliano Arriagada
              </a>
              <a
                href="https://ar.linkedin.com/in/maria-belen-rodriguez7"
                target="_blank"
                rel="noreferrer"
                className="link-underline link-underline-opacity-0 link-dark fw-bold ms-4"
              >
                Maria Belen Rodriguez
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="link-underline link-underline-opacity-0 link-dark fw-bold ms-4"
              >
                Ivana Aubert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
