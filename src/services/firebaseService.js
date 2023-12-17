import { db } from "../firebaseConfig/firebase";

import { collection, getDocs, updateDoc, addDoc, deleteDoc, doc, getDoc, setDoc, query, where } from "firebase/firestore";



// Initialize Firebase


export const firebaseService = {

  // READ
  getDocuments: async (collectionName) => {
    try {
      const coll = collection(db, collectionName);
      const snapshot = await getDocs(coll);
      const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('documents', documents);
      return documents;
    } catch (error) {
      console.error('Error getting documents: ', error);
      throw error;
    }
  },

  // CREATE
  addDocument: async (collectionName, data) => {
    try {

      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
      data.id = docRef.id;
      return docRef.id;
    } catch (error) {
      console.error('Error adding document: ', error);
      throw error;
    }
  },


  // DELETE
  deleteDocument: async (collectionName, docId) => {
    try {
      const productoDoc = doc(db, collectionName, docId);
      console.log('del productoDoc', collectionName + '- ' + docId);
      await deleteDoc(productoDoc);
      const docSnap = await getDoc(productoDoc);
      const isDeleted = !docSnap.exists();
      console.log('Document deleted ', isDeleted);
      return isDeleted;
    } catch (error) {
      console.error('Error deleting document: ', error);
      throw error;
    }
  },

  // DELETE
  /*deleteDocument: async (collectionName, doc) => {
    try {
      //obtengo el doc de la relacion
      //const coll = collection(db, collectionName);
      const q = query(collection(db, collectionName), where('idmovie', '==', doc.idmovie), where('iduser', '==', doc.iduser));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Obtener el ID del documento

        const doc = querySnapshot.docs[0].ref;

        console.log(doc);

        await deleteDoc(doc);


        const docSnap = await getDoc(doc);
        const isDeleted = !docSnap.exists();
        console.log('Document deleted ', isDeleted);
        return isDeleted;
      } else {
        console.log('No se encontró ningún documento que coincida con los parámetros.');
      }
    } catch (error) {
      console.error('Error deleting document: ', error);
      throw error;
    }
  },*/
};

//export default firebaseService;