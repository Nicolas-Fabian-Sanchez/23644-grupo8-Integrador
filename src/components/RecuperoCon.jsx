
export const RecuperoCon = () => {
  return (
    <form className="mx-auto border rounded-4 py-5 text-bg-light ">
        <h5 className=" mb-4 px-5">Se le enviara un código de verificacion a su correo electrónico</h5>
      <div className="mb-5 px-5">
        <label for="recuperoContraseña" className="form-label  fw-bold">
          Email 
        </label>
        <input
          type="email"
          className="form-control "
          id="recuperoContraseña"
          aria-describedby="emailHelp"
          required = {true}
        />
      </div>
      <button type="submit" className="btn btn-success ms-5">
        Recuperar contraseña
      </button>
    </form>
  );
};
