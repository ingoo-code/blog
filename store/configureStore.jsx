import {createWrapper} from 'next-redux-wrapper'
import {applyMiddleware, compose, createStore} from 'redux'
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSaga from 'redux-saga'
import rootSaga from '../saga/index'

//logger middleware
const loggerMiddleware = ({dispatch,getState}) => next => action => {
    console.log(action)
    return next(action)
}


const configureStore = () => {
    const sagaMiddleware = createSaga()
    const middlewares = [sagaMiddleware]
    const enhancer = process.env.NODE_NEV === 'production' 
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer,enhancer)
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store 
}

//첫번째는 configureStore 값 두번째값은 객체 debug
const wrapper = createWrapper(configureStore,{
    debug:process.env.NODE_ENV === "development"
})

export default wrapper 