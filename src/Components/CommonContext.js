import React, {useReducer} from 'react';
import reducer from './reducer';
const AppContext =React.createContext();
const initialState={
    name:'',
    image:''
}


const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const updateHomePage=()=>{
        return dispatch({
            type:'HOME_UPDATE',
            payload:{
                name:'Manita Panta',
                image:'img'
            }
        })
    }

    // const data=localStorage.getItem('user-info')
    return (
        <AppContext.Provider value={{...state,updateHomePage}}>{children}</AppContext.Provider>
    )
}
export {AppContext,AppProvider}