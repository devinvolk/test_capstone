import React from 'react'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const AuthState = () => {
    const [authUser, setAuthUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                console.log(authUser)
            } else {
                setAuthUser(null)
            }
        })
    }, [authUser])

    const userSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            console.log(error.message)
          });
    }

  return (
    <div>
        { authUser ? <><p>Hello, {authUser.displayName}</p><Button variant="outlined" color="error" onClick={userSignOut}>Sign Out</Button></> : <p>Signed Out</p>}
    </div>
  )
}
