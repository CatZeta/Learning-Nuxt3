
import {useCookie} from "#app";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

// Function to create a new user
export const createUser = async (email, password, displayName) => {
  const auth = getAuth();
  const db = getFirestore();
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    if (credentials.user) {
      await updateProfile(credentials.user, { displayName }); // Update the user's profile with the display name
      credentials.user.displayName = displayName; // Update the local firebaseUser object with displayName

      const user = credentials.user;
      await setDoc(doc(db, 'users', user.uid), {
        displayName: user.displayName,
        email: user.email,
        createdAt: new Date()
      });

      console.log('User created:', user);
    }
    return credentials;
  } catch (error) {
    console.error('Error creating user:', error.code, error.message);
    return null;
  }
};

// Function to sign in an existing user
export const signInUser = async (email, password) => {
  const auth = getAuth();
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error signing in user:', error.code, error.message);
    return null;
  }
};

// Function to initialize the user and set up authentication state listener
export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser(); // Custom hook to get the firebase user state

  // Set the initial value of firebaseUser
  firebaseUser.value = auth.currentUser;

  const cookie = useCookie('cookie');

  // Listen for changes in authentication state
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Auth state changed', user);
    } else {

      // User is signed out
      console.log('Auth state changed', user);
    }

    // Update the firebaseUser state and the cookie value
    firebaseUser.value = user;
    cookie.value = user ? JSON.stringify(user) : null;
  /*console.log('Init user', firebaseUser); */
  });
};

// Function to sign out the user
export const signOutUser = async () => {
  const auth = getAuth();
  try {
    const result = await auth.signOut();
    console.log('User signed out:', result);
  } catch (error) {
    console.error('Error signing out user:', error.code, error.message);
  }
};