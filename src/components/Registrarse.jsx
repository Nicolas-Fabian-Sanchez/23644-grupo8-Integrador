
export const Registrarse=()=>{
    
    return(

        <form className="row g-1 text-bg-light   mx-auto rounded-4 p-4 my-3">
        <div className="col-md-6">
          <label for="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre"  required = {true}/>
        </div>
        <div className="col-md-6">
          <label for="apellido" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="apellido"  required = {true}/>
        </div>
        <div className="col-12">
          <label for="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="ejemplo@elemplo.com"  required = {true}/>
        </div>
        <div className="col-12">
          <label for="contrasenia" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="contrasenia" placeholder=""  required = {true}/>
        </div>
        <div className="col-12">
          <label for="confirmaContrasenia" className="form-label">Confirmar contraseña</label>
          <input type="password" className="form-control" id="confirmaContrasenia" placeholder=""  required = {true}/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Registrarse</button>
        </div>
      </form>
        
       
    )
}