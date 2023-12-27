import React, {  useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom'



const Protected = ({ children }) => {
    const authContext = useContext(AuthContext);

    if(authContext?.isAuthenticated===null){
        return null;
    }

    return (
        <>
            {authContext?.isAuthenticated===true ? (
                <>{children}</>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    )
}

export default Protected