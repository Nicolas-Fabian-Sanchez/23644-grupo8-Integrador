import "./Registrarse.css";

export const RecuperoCon=()=>{
   return(
        <div className="centrado">
            <form>
                
                <legend className="centrado"> Recupere contraseña : </legend>
                <p>Se le enviara un codigo de verificacion a su correo electronico</p>
                <label htmlFor="email"> Ingrese su Email:</label>
                <input type="mail" id="email" name="email" ></input>
                
                <input type="submit" value="Enviar" className="button" />
            </form>
        </div>

   )

}