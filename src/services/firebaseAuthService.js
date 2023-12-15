// firebaseAuthService.js

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { app } from '../firebaseConfig/firebase';// Importa tu archivo de configuración de Firebase
import { authObserver } from '../helper/Observer';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const FirebaseAuthService = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      auth.currentUser = user;
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      auth.currentUser = userCredential.user;
      await updateProfile(userCredential.user, { displayName });
      // Notificar a los observadores sobre el cambio en la autenticación
      authObserver.notify(userCredential.user);

      return userCredential.user;
    } catch (error) {
      console.error('Error al registrar nuevo usuario:', error.message);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      setUser(user);
      return user;
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      throw error;
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      return user;
      console.log('Usuario autenticado con Google:', user);
    } catch (error) {
      console.error('Error al autenticar con Google:', error.message);
    }
  };

  const updateUser = async (user) => {
    try {
      await updateProfile(user, {
        displayName: user.displayName,
        photoURL: 'https://example.com/nueva-imagen.jpg'
      });
      return user;
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      throw error;
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
      return true;
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
      throw error;
    }
  };

  const getAuthUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe(); // Detener la escucha después de obtener el estado inicial
        resolve(user || null);
      }, reject);
    });
  };

  const resetPasswordEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true
    } catch (error) {
      console.log(error);
      return false;
    }
  }





  return { loading, getAuthUser, signUp, signIn, handleSignInWithGoogle, updateUser, signOut: signOutUser,resetPasswordEmail };
};


