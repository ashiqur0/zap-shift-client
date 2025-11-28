import React, { useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth/web-extension';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const authInfo = {
        createUserWithEmail,
        loginWithEmail,
        logOut,
        loginWithGoogle,
        updateUser,
        user,
        loading
    }

    return <AuthContext value={authInfo}> {children} </AuthContext>
};

export default AuthProvider;