import { HYDRATE } from 'next-redux-wrapper'
import {combineReducers} from 'redux'

import user from './user'
import post from './post'
import category from './category'

const initialState = {
     user: {
        
     },
     post : {

     },
     category:{

     }
}

 
const rootReducer = combineReducers({ 
    index: (state = {} ,action) =>{
        switch(action.type){
            case HYDRATE:
                return{
                    ...state,...action.payload
                }
            default:
                return state
         }
    },
    user,
    post,
    category,
})
console.log(rootReducer)

export default rootReducer