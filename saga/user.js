import { all,fork } from "redux-saga/effects";
import axios from 'axios'

// LOGOUT
function logoutAPI(){
    return axios.post('http://localhost:3000/api/login')
}

function* logout(){
    try{
        const result = yield call(logoutAPI)
        yield put({
            type:'USER_LOG_OUT_SUCCESS',
            data:result.data
        })
    } catch (e){
         yield put({
             type:'USER_LOG_OUT_ERROR',
             data:result.reponse.data,
         })
    }
}

function* watchLogOut(){
    yield takeEvery('USER_LOG_OUT_REQUEST',logout)
}

// LOGIN
function loginAPI(data){
    return axios.post('http://localhost:3000/api/login',data)
}

function* login(action){
    try{
        const result = yield call(loginAPI,action.data)
        yield put({
            type:'USER_LOG_IN_SUCCESS',
            data:result.data
        })
    } catch (e){
         yield put({
             type:'USER_LOG_IN_ERROR',
             data:result.reponse.data,
         })
    }
}

function* watchLogin(){
    yield takeEvery('USER_LOG_IN_REQUEST',login)
}

export default function* userSaga(){ 
    yield all([
        fork(watchLogin),
        fork(watchLogOut)
    ])
}