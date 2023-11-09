import axios from 'axios';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email:userEmail}
            console.log('current value of the current user',currentUser)
            setloading(false)
            setUser(currentUser);
            if(currentUser){
                axios.post('https://assignment-no-11-server-snowy.vercel.app/jwt',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log('token response',res.data)
                })
            }
            else{
                axios.post('https://assignment-no-11-server-snowy.vercel.app/logout',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })

            }
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