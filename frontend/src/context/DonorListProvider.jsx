import React, { createContext, useReducer } from 'react';

const initialState = {
    donors: null,
}

const donorsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_DONORS':
            return {
                ...state,
                donors: action.payload,
            };
        default:
            return state;
    }
}

export const DonorListContext = createContext();

const DonorListProvider = ({children}) => {
    const [state, dispatch] = useReducer(donorsReducer, initialState);
    return (
        <DonorListContext.Provider value={{ ...state, dispatch }}>
            {children}
            
        </DonorListContext.Provider>
    );
};

export default DonorListProvider;