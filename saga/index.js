/*
    Saga Effect에 대해서알아보자.
    all , fork
    all : 배열안에있는 것들을 실행하는것
    fork : 함수를 실행하는것 (비슷한것 call)
    take : take 안에들어간 String값이 실행될떄까지 기다리겠다.
    takeEvery : take 안에 들어간 String (action.type) 이 실행될떄까지 기다리는데 한번이후 소멸되는것이아니라 계속사용가능.
    takeLatest : action.type이 두번 이상 (동시에) 발생되었을때 로딩중인것들중 마지막것만 실행
    throttle: 시간을 넣어서 시간안에 실행이 다시안되게 1초설정하면 1초동안 값을못보냄.
    put : 

    쓰로팅과 디바운싱 에 대해서 알아보기
*/

import {all,call,fork, take, takeEvery, takeLatest, put} from 'redux-saga/effects'
import axios from 'axios'
import userSaga from './user'

function* testAction(action){
    //axios.post('http://localhost:3000/api/login')
    const result = yield call(axios.post,'http://localhost:3000/api/login',action.data)
    const {data} = result.data
    console.log(data)
    yield put({
        type:'USER_LOG_IN_SUCCESS',
    })
}

function* test(){
    console.log('saga test')
    yield takeLatest('USER_LOG_IN_REQUEST',testAction)
}

export default function* rootSaga(){
    yield all([
        // fork(userSaga)
        fork(test)
    ])
}