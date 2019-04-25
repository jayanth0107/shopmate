import backendApi from '../apis/backendApi';
import _ from 'lodash';
import { SELECTED_CATEGORY , SELECTED_DEPARTMENT, SELECTED_PRODUCT, SEARCH, MODAL_OPEN, MODAL_CLOSE, SELECTED_ATTRIBUTE, SELECTED_REVIEW} from './types';

export const selectDepartment = () =>  async dispatch => {
    const response = await backendApi.get('/departments');

    dispatch( {type: SELECTED_DEPARTMENT, payload: response.data });
};

export const selectCategory = () => async dispatch => {
    const response = await backendApi.get('/categories');
        
    dispatch({type: SELECTED_CATEGORY, payload: response.data.rows });   
};

export const selectCategoryFromDepartment = id => async dispatch => {
    const response = await backendApi.get(`/categories/inDepartment/${id}`);

    dispatch({type: SELECTED_CATEGORY, payload: response.data});
};

export const selectProduct = pageNo => async dispatch => {
    const response = await backendApi.get(`/products?page=${pageNo}`);
    
    dispatch({type: SELECTED_PRODUCT, payload: response.data, departmentId: '', cateogryId: '' });   
};

export const selectProductFromDepartment = (id, pageNo) => async dispatch => {
    const response = await backendApi.get(`/products/inDepartment/${id}?page=${pageNo}`);

    dispatch({type: SELECTED_PRODUCT, payload: response.data, departmentId:`${id}`, cateogryId: '' });
};

export const selectProductFromCategory = (id, pageNo) => async dispatch => {
    const response = await backendApi.get(`/products/inCategory/${id}?page=${pageNo}`);

    dispatch({type: SELECTED_PRODUCT, payload: response.data, departmentId: '', cateogryId: `${id}`});
};

export const searchProduct = (searchTerm) => {
    
    return {type: SEARCH,  searchTerm: searchTerm };
};

// export const selectAttributes = id => async dispatch => {
//     const response = await backendApi.get(`/attributes/inProduct/${id}`);

//     dispatch({type: SELECTED_ATTRIBUTE, payload: response.data});
    
// };

export const selectAttributes = id => dispatch => _selectAttributes(id, dispatch);
      const _selectAttributes = _.memoize(async (id, dispatch) => {
      const response = await backendApi.get(`/attributes/inProduct/${id}`);

      dispatch({type: SELECTED_ATTRIBUTE,  payload: response.data });
});

// export const selectReviews = id => async dispatch => {
//     const response = await backendApi.get(`/products/${id}/reviews`);

//     dispatch({type:SELECTED_REVIEW, payload: response.data});
// };

export const selectReviews = id => dispatch => _selectReviews(id, dispatch);
    const _selectReviews = _.memoize(async (id, dispatch) => {
    const response = await backendApi.get(`/products/${id}/reviews`);

    dispatch({type:SELECTED_REVIEW, payload: response.data});
});

export function openModal(modalProps) {
    return {
      type: MODAL_OPEN,
      payload: modalProps
    };
};
  
export function closeModal() {
    return {
      type: MODAL_CLOSE 
    };
}

