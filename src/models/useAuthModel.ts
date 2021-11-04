import { useState, useCallback } from 'react'

export default function useAuthModel() {
    const [user, setUser] = useState('')
    // console.log(user);

    const signin = useCallback((user, password = 123456) => {
        setUser(user)
    }, [])

    const signout = useCallback(() => {
    }, [])

    return {
        user,
        signin,
        signout,
        setUser
    }
}