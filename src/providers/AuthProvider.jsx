import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
   }

   const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
   }

   const googleLogin = (provider)=>{
        setLoading(true);
    return signInWithPopup(auth, provider);
   }

   const signOutUser = ()=>{
        return signOut(auth);
   }

   const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile);
   }


   useEffect( ()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('current user', currentUser);
        setUser(currentUser);
        setLoading(false);
    })

    return ()=>{
        unSubscribe();
    }

   },[])


   
   
    const authInfo = {
        createUser,
        signInUser,
        googleLogin,
        updateUserProfile,
        signOutUser,
        user,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;