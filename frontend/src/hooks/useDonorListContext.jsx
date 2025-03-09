import React, { useContext } from 'react';
import { DonorListContext } from '../context/DonorListProvider';

const useDonorListContext = () => {
    const context = useContext(DonorListContext);
    return context;
}

export default useDonorListContext;