import linkedInLogo2 from './img/LinkedInLogo2.png'

export let Footer = () => {
  return (
    <div className="container-fluid bg-primary d-flex flex-column align-items-center  flex-md-row flex-wrap py-3  justify-content-center justify-content-md-around  ">
        <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#Sobre-nosotros"
      >
        <p className="m-0">Sobre nosotros</p>
      </button>
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#Tecnologias-utilizadas"
      >
        <p className="m-0">Tecnologías utilizadas</p>
      </button>
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#Documentacion"
      >
        <p className="m-0">Documentación</p>
      </button>
      <button
        type="button"
        className="btn btn-primary w-25 p-0"
        data-bs-toggle="modal"
        data-bs-target="#LinedIn"
      >
        <img src={linkedInLogo2} alt="LinkedIn" srcset="" className=' w-75 w-md-100'/>
      </button>

      
      <div
        className="modal fade"
        id="Sobre-nosotros"
        tabindex="-1"
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
            <div className="modal-body fw-bold text-start">Somos  estudiantes del programa Codo a Codo capacitandonos en el uso de React.js por medio de uso de componentes, react hooks y diseño modular de single page, aplicando los conocimientos a un proyecto propuesto por nuestra docente en el cual estamos realizando un sitio web de películas totalmente integrado con React.js y otras tecnologías detalladas en el proyecto.</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="Documentacion"
        tabindex="-1"
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
        tabindex="-1"
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
            <div className="modal-body">ejemplo</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="LinedIn"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content pb-3">
            <div className="modal-header flex-column-reverse border-bottom-0 pb-0">
                <div className='w-75 border-bottom border-danger text-center  '>

              <img src={linkedInLogo2} alt='Linkedin'
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
            <div className="modal-body ps-5 ">
              <a
                href="http://www.linkedin.com/in/jonathan-galimberti-developer"
                target="_blank"
                rel="noreferrer"
                className="link-underline link-underline-opacity-0 link-dark fw-bold ms-4"
              >
                Jonathan Galimberti
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
