import {createContext, useState,useEffect} from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export  const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null)
    const [loading,setloading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser =(email,password)=>{
        setloading(true)
      return  signInWithEmailAndPassword(auth, email, password)

    }
    const logout =()=>{
        setloading(true)
      return  signOut(auth)

    }
    const googleLogin=()=>{
        setloading(true)
          return signInWithPopup(auth,provider);
      }
    const userinfo={
        user,
        createUser,
        signinUser,
        logout,
        loading,
        googleLogin
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('current value of the current user',currentUser)
            setloading(false)
            setUser(currentUser)
        })
        return()=>{
            unsubscribe();
        }
    },[])
    return (
       <AuthContext.Provider value={userinfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;