import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const toggleTheme = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: '#301934',
                backgroundColor: 'gray'
            })
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            if (currentUser === null || currentUser.emailVerified || currentUser.uid) {
                setUser(currentUser);
            }
            setLoading(false);
        }));
        return () => {
            unsubscribe();
        }
    }, [])

    const providerLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateUserProfile(auth.currentUser, profile)
    }

    const verifyEmail = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        providerLogIn,
        logOut,
        createUser,
        signIn,
        verifyEmail,
        updateUserProfile,
        setLoading,
        loading,
        myStyle,
        toggleTheme
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;