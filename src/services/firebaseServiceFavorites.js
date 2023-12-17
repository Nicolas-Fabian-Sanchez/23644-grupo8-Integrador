// firebaseServiceFavorites.js
import { db } from "../firebaseConfig/firebase";
import { firebaseService } from '../services/firebaseService';
import { collection, getDocs, updateDoc, addDoc, deleteDoc, doc, getDoc, setDoc, query, where } from "firebase/firestore";

const firebaseServiceFavorites = {
  ...firebaseService, // Copia todos los métodos de firebaseService

  //READ
  getDocumentByIdUser: async (collectionName, iduser) => {
    try {
      //obtengo el doc de la relacion
      //const coll = collection(db, collectionName);
      const q = query(collection(db, collectionName), where('iduser', '==', iduser));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Obtener el ID del documento

        const documents = querySnapshot.docs.map(doc => ({ id: doc.id, idmovie:doc.data().idmovie,type:doc.data().type }));

        console.log('documents', documents);
        return documents;
     
        //console.log('Encontró documento que coincida con los parámetros.');
      } else {
        return null;
        //console.log('No se encontró ningún documento que coincida con los parámetros.');
      }
    } catch (error) {
      //console.error('Error deleting document: ', error);
      throw error;
    }
  },

  //READ

  getDocumentById: async (collectionName, iduser, idmovie,type) => {
    try {
      //obtengo el doc de la relacion
      //const coll = collection(db, collectionName);
      const q = query(collection(db, collectionName), where('idmovie', '==', idmovie), where('iduser', '==', iduser), where('type', '==', type));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Obtener el ID del documento
        return true;
        //console.log('Encontró documento que coincida con los parámetros.');
      } else {
        return false;
        //console.log('No se encontró ningún documento que coincida con los parámetros.');
      }
    } catch (error) {
      //console.error('Error deleting document: ', error);
      throw error;
    }
  },
  // DELETE
  deleteDocument: async (collectionName, doc) => {
    try {
      //obtengo el doc de la relacion
      //const coll = collection(db, collectionName);
      const q = query(collection(db, collectionName), where('idmovie', '==', doc.idmovie), where('iduser', '==', doc.iduser));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Obtener el ID del documento
        const doc = querySnapshot.docs[0].ref;
        //console.log(doc);
        await deleteDoc(doc);
        const docSnap = await getDoc(doc);
        const isDeleted = !docSnap.exists();
        //console.log('Document deleted ', isDeleted);
        return isDeleted;
      } else {
        //console.log('No se encontró ningún documento que coincida con los parámetros.');
      }
    } catch (error) {
      //console.error('Error deleting document: ', error);
      throw error;
    }
  },
};

export { firebaseServiceFavorites };