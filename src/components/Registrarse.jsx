import React, { useState } from "react";
import { FirebaseAuthService } from "../services/firebaseAuthService";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; 

export const Registrarse=()=>{
  let {  signUp } = FirebaseAuthService();
  let [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  const handleSignUp = async () => {
    console.log('Registrarse');
    try {
      //const name = document.getElementById('nameSignUp').value;
      //ver si se puede agregar en firebase authentication un campo mas como lastname
      //const lastName = document.getElementById('lastNameSignUp').value;
      const email = document.getElementById('emailSignUp').value;
      const password = document.getElementById('passwordSignUp').value;
      const confirmPassword = document.getElementById('confirmPasswordSignUp').value;
      // Verificar que la contraseña y la confirmación de contraseña coincidan
      if (password !== confirmPassword && password!=='' && password!==null) {
         Swal.fire('Error', 'No coinciden contraseñas', 'error');
        return;
      } else {
        const userCredential = await signUp(email, password);
        console.log('userCredential ',userCredential);
        user = userCredential;
        console.log(user);
       // setUser(user);
        console.log('Usuario creado con éxito:', user);
        Swal.fire('¡Usuario Creado!', `Bienvenido, ${user.email}!`, 'success');
        navigate('/');

      }
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
      console.error('Error al crear el usuario:', error.message);
    }
  };

    return(

        <form id='formSignUp' className="row g-1 text-bg-light   mx-auto rounded-4 p-4 my-3">
        <div className="col-md-6">
          <label htmlFor="nameSignUp" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nameSignUp"  required = {true}/>
        </div>
        {/*<div className="col-md-6">
          <label htmlFor="lastNameSignUp" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="lastNameSignUp"  required = {true}/>
    </div>*/}
        <div className="col-12">
          <label htmlFor="emailSignUp" className="form-label">Email</label>
          <input type="email" className="form-control" id="emailSignUp" required = {true}/>
        </div>
        <div className="col-12">
          <label htmlFor="passwordSignUp" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="passwordSignUp" placeholder=""  required = {true}/>
        </div>
        <div className="col-12">
          <label htmlFor="confirmPasswordSignUp" className="form-label">Confirmar contraseña</label>
          <input type="password" className="form-control" id="confirmPasswordSignUp" placeholder=""  required = {true}/>
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-success"   onClick={handleSignUp}>Registrarse</button>
        </div>
      </form>
        

    )
}