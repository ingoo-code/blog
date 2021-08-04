import {useContext,useEffect} from 'react'
import Router from 'next/router'
import {USER_LOGOUT} from '../reducers/user'
import {useDispatch} from 'react-redux'

const Logout = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(USER_LOGOUT())

        setTimeout(()=>{
            Router.back()
        },1000)
    },[])

    return (
        <>
            Logout..
        </>
    )
}

export default Logout