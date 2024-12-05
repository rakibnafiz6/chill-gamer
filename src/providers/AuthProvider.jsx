import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

   const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
   }

   const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
   }

   const googleLogin = (provider)=>{
    return signInWithPopup(auth, provider);
   }

   const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile);
   }
   
   
    const authInfo = {
        createUser,
        signInUser,
        googleLogin,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;