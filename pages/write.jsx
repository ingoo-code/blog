import {useContext,useEffect} from 'react'
import Router from 'next/router'
import {USER_LOGOUT} from '../reducers/user'
import {useDispatch} from 'react-redux'

const Write = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="제목을 입력해주세요" />
                </div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button type="submit">
                        글쓰기
                    </button>
                </div>
            </form>
        </>
    )
}

export default Write