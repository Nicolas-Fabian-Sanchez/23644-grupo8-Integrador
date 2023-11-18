
export const Registrarse=()=>{
    
    return(

        <form class="row g-1 text-bg-light   mx-auto rounded-4 p-4 my-3">
        <div class="col-md-6">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre"  required = {true}/>
        </div>
        <div class="col-md-6">
          <label for="apellido" class="form-label">Apellido</label>
          <input type="text" class="form-control" id="apellido"  required = {true}/>
        </div>
        <div class="col-12">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="ejemplo@elemplo.com"  required = {true}/>
        </div>
        <div class="col-12">
          <label for="contrasenia" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="contrasenia" placeholder=""  required = {true}/>
        </div>
        <div class="col-12">
          <label for="confirmaContrasenia" class="form-label">Confirmar contraseña</label>
          <input type="password" class="form-control" id="confirmaContrasenia" placeholder=""  required = {true}/>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-success">Registrarse</button>
        </div>
      </form>
        
       
    )
}