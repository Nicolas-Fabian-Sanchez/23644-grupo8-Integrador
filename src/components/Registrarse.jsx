import "./Registrarse.css"

export const Registrarse=()=>{
    
    return(
        <div className="centrado">
            <form>
                <legend className="centrado">Bienvenido a Youmovies</legend>
                <legend className="centrado"> Registrese aqui : </legend>
                <label htmlFor="nombre"> Nombre:</label>
                <input type="texto" id="nombre" name="nombre" ></input>
                <label htmlFor="apellido"> Apellido:</label>
                <input type="texto" id="apellido" name="apellido" ></input>
                <label htmlFor="email"> Email:</label>
                <input type="mail" id="email" name="email" ></input>
                <label htmlFor="contrasenia"> Contraseña</label>
                <input type="password" id="contrasenia" name="contrasenia" ></input>
                <input type="submit" value="Registrarse" className="button" />
            </form>
        </div>
           
        
       
    )
}