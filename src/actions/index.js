import backendApi from '../apis/backendApi';

export const selectDepartment = () =>  async dispatch => {
        const response = await backendApi.get('/departments');

        dispatch( {type: 'SELECTED_DEPARTMENT', payload: response.data });
};

export const selectCategory = () => {
    return {
        type: 'SELECTED_CATEGORY',
        payload: ''
    };
};

