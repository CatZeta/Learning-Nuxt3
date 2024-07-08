import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    setDoc
  } from "firebase/firestore";
  import { firestoreDb } from "./firebase";
  
  /**
   * Query documents in a collection by collection name.
   * @param {string} col - The name of the collection to query.
   * @returns {Promise<Object[]>} An array of documents in the collection.
   */
  export const queryByCollection = async (col: string) => {
    try {
      // Get a reference to the collection
      const colRef = collection(firestoreDb, col);

      // Get all documents in the collection
      const snapshot = await getDocs(colRef);

      // Map each document to an object with the document data and the document ID
      const docs = Array.from(snapshot.docs).map((doc) => ({...doc.data(), id: doc.id}));

      /* console.log("Docs returned:", docs); */

      return docs;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  /**
   * Set or merge a document in a collection.
   * @param {string} col - The name of the collection to set the document in.
   * @param {Object} document - The document data to set or merge.
   */
  export const set = async (col: string, document: Object) => {
    // Set the document in the collection with merge: true, so that it updates existing fields and adds new fields
    await setDoc(doc(collection(firestoreDb, col)), document, { merge: true });
  };

  /**
   * Add a document to a collection.
   * @param {string} col - The name of the collection to add the document to.
   * @param {Object} document - The document data to add.
   * @returns {Promise<DocumentReference>} A promise that resolves with a reference to the added document.
   */
  export const add = async (col: string, document: Object) => {
    // Get a reference to the collection
    const colRef = collection(firestoreDb, col);

    // Add the document to the collection and return a reference to the added document
    const docRef = await addDoc(colRef, document);

    return docRef;
  };

  /**
   * Delete a document from a collection.
   * @param {string} col - The name of the collection to delete the document from.
   * @param {string} id - The ID of the document to delete.
   * @returns {Promise<void>} A promise that resolves when the document is deleted.
   */
  export const del = async (col: string, id: string) => {
    // Get a reference to the document
    const docRef = doc(firestoreDb, col, id);

    // Delete the document
    return await deleteDoc(docRef);
  };
