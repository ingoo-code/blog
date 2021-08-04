import FormLayout from "../components/FormLayout"
import Router from 'next/router';
import useInput from '../hooks/useInput'
import {useDispatch} from 'react-redux'
import {USER_LOGIN} from '../reducers/user'

const Login = () => {

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(USER_LOGIN())
        Router.back()
    }

    const username = useInput('')
    const userpw = useInput('')

    return (
        <FormLayout>
            <h2>로그인!</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" {...username} name="username" placeholder="아이디를 입력해주세요." />
                <input type="password" {...userpw} name="userpw" placeholder="패스워드를 입력해주세요." />
                <input type="submit" />
            </form>
        </FormLayout>
    )
}

export default Login