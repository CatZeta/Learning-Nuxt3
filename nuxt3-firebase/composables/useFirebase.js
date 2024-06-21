import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const createUser = async (email, password) => {
  const auth = getAuth();
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    return credentials;
  } catch (error) {
    console.error('Error creating user:', error.code, error.message);
    return null;
  }
};

export const signInUser = async (email, password) => {
  const auth = getAuth();
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials;
  } catch (error) {
    console.error('Error signing in user:', error.code, error.message);
    return null;
  }
};

export const initUser = async () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid

      console.log('user', user);
    } else {
      console.log('User is signed out');
    }
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  try {
    const result =await auth.signOut();
    console.log('User signed out:', result);
  } catch (error) {
    console.error('Error signing out user:', error.code, error.message);
  }
}