import backendApi from '../apis/backendApi';
import { SELECTED_CATEGORY , SELECTED_DEPARTMENT, SELECTED_PRODUCT } from './types';

export const selectDepartment = () =>  async dispatch => {
        const response = await backendApi.get('/departments');

        dispatch( {type: SELECTED_DEPARTMENT, payload: response.data });
};

export const selectCategory = () => async dispatch => {
        const response = await backendApi.get('/categories');
        
        dispatch({type: SELECTED_CATEGORY, payload: response.data.rows });   
};

export const selectProduct = () => async dispatch => {
    const response = await backendApi.get('/products');
    
    dispatch({type: SELECTED_PRODUCT, payload: response.data.rows });   
};