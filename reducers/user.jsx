export const initialState = {
    isLogin:false,
    user:null,
    joinUpDate:{}, 
    loginData:{}
}

export const USER_LOGIN = (data) => {
    return {
       type:'USER_LOG_IN_REQUEST',
       payload:{
           data,
       }
    } 
}

export const USER_LOGOUT = () => {
    return {
        type:'USER_LOG_OUT'
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case "USER_LOG_IN_REQUEST":
            return {
                ...state
            }
        case "USER_LOG_IN_SUCCESS": 
            console.log('login? : ',state)
            return {
                ...state,
                isLogin:true,
                 
            }
        case "USER_LOG_IN_ERROR":
            return state
        case "USER_LOG_OUT_REQUEST":
            return state
        case "USER_LOG_OUT_SUCCESS":
            return {
                ...state,
                isLogin:false,
                user:null
            }  
        case "USER_LOG_OUT_ERROR":
            return state
        default:
            return state
    }
}

export default reducer 