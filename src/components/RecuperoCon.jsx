
import React, { useState } from 'react';
import { FirebaseAuthService } from '../services/firebaseAuthService';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const RecuperoCon = () => {
  const [emailRecovery, setEmailRecovery] = useState('');
  const [isSent, setIsSent] = useState(false);
  let { resetPasswordEmail } = FirebaseAuthService();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const res = await resetPasswordEmail(emailRecovery);
      setIsSent(true);
      if (res) {
        Swal.fire('', `Se ha enviado un correo electrónico a ${emailRecovery} para restablecer su contraseña!`, 'success');
      }

    } catch (error) {
      Swal.fire('Error', 'No hemos podido enviar un correo para restablecer su contraseña intentelo más tarde!', 'error');
      console.error('Error', error.message);
    }finally{
      navigate('/');
    }
  };


  return (
    <div>
      {isSent ? (
        <p>Se ha enviado un correo electrónico para restablecer la contraseña. Revise su bandeja de entrada.</p>
      ) : (
        <form className="mx-auto border rounded-4 py-5 text-bg-light ">
          <h5 className=" mb-4 px-5">Se le enviara un código de verificacion a su correo electrónico</h5>
          <div className="mb-5 px-5">
            <label htmlFor="emailRecovery" className="form-label  fw-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control "
              id="emailRecovery"
              aria-describedby="emailHelp"
              required={true}
              value={emailRecovery} onChange={(e) => setEmailRecovery(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-success ms-5" onClick={handleResetPassword}>
            Recuperar contraseña
          </button>
        </form>
      )}
    </div>
  );
};
