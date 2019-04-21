import backendApi from '../apis/backendApi';

export const selectDepartment = () =>  async dispatch => {
        const response = await backendApi.get('/departments');

        dispatch( {type: 'SELECTED_DEPARTMENT', payload: response.data });
};

export const selectCategory = () => async dispatch => {
        const response = await backendApi.get('/categories');
        
        dispatch({type: 'SELECTED_CATEGORY', payload: response.data.rows });   
};

