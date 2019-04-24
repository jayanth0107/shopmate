import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import departmentReducer from './departmentReducers';
import categoryReducer from './categoryReducers';
import productReducer from './productReducers';
import searchReducer from './searchReducers';
import modalReducer from './modalReducer';

export default combineReducers({
    form: formReducer,
    departments: departmentReducer,
    categories: categoryReducer,
    products: productReducer,
    search: searchReducer,
    modals: modalReducer
});