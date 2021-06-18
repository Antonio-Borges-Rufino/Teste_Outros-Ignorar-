import React,{createContext, useReducer} from 'react';
import users from '../data/user'

const initialState = {users}

const Usercontext = createContext({})


export const UserProvider = props =>{

    function reducer(state, action){
        if(action.type == "deleteUser"){
            const user = action.payload
            return{
                ...state,
                users: state.users.filter(u => u.id !== user.id)
            }    
        }
        if(action.type =="creatUser"){
            const user = action.payload
            return{
                ...state,
                users: [...state.users, user]
            }   
        }
        if(action.type =="updateUser"){
            const update = action.payload
            return{
                ...state,
                users: state.users.map(u => u.id === update.id?update:u)
            }   
        }
        return (state)
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <Usercontext.Provider value={{state, dispatch}}>
            {props.children}
        </Usercontext.Provider>
    )
}


export default Usercontext

