import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const createUser = async (email, password, displayName) => {
  const auth = getAuth();
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    if (credentials.user) {
      await updateProfile(credentials.user, { displayName }); // Atualiza o perfil do usuário com o displayName
      // Atualiza o firebaseUser com o displayName
      credentials.user.displayName = displayName;
    }
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
  const firebaseUser = useFirebaseUser();

  firebaseUser.value = auth.currentUser;
  /* console.log('Init user', firebaseUser); */

  const userCookie = useCookie('userCookie');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Auth state changed', user);
    } else {
      //If signed out
      console.log('Auth state changed', user);
    }

    firebaseUser.value = user;
    console.log('Init user', firebaseUser);

    userCookie.value = JSON.stringify(user); 
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  try {
    const result = await auth.signOut();
    console.log('User signed out:', result);
  } catch (error) {
    console.error('Error signing out user:', error.code, error.message);
  }
}