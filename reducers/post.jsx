export const initialState = {
    posts:[
        {
            id:1,
            content:"첫번째 블로그",
            category:"HTML",
            Image:[
                {
                    src:'https://image.shutterstock.com/image-photo/pastoral-green-field-long-shadows-260nw-275372477.jpg',
                    src:'https://image.shutterstock.com/image-photo/texture-background-pattern-green-silk-260nw-717806101.jpg',
                    src:'https://image.shutterstock.com/image-photo/skateboard-long-board-stands-near-260nw-1081860407.jpg',
                }
            ],
            Comments:[
                {}
            ]
        },
    ],
    ImagesPaths:[],
    postAdded: false,
}

const ADD_POST = 'ADD_POST'

const addPost = {
    type:ADD_POST
}

const dumyPost = {
    id:2,
    content:"두번째 블로그",
    category:"HTML"
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts:[dumyPost,...state.posts]
            }
        default:
            return state
    }
}

export default reducer 