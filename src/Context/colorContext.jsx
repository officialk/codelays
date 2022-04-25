import { createContext, useEffect, useReducer, useState } from 'react';

export const ColorContext = createContext();
function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE_COLOR_WITH_PAYLOAD':
        return action.payload;
     default:
       return state;
    }
}
const ColorState = ({children}) => {
    const initialState = { color: '#d30404' };
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        console.log("context ->" + state.color);
    })
    return (
        <ColorContext.Provider value={{ state, dispatch }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorState;