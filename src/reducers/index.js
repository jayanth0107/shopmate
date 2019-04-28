import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import departmentReducer from './departmentsReducer';
import categoryReducer from './categoriesReducer';
import productReducer from './productsReducer';
import searchReducer from './searchReducer';
import modalReducer from './modalReducer';
import attributeReducer from './attributesReducer';
import reviewReducer from './reviewsReducer';
import shoppingCartReducer from './shoppingCartReducer';
import cartTotalReducer from './cartTotalReducer';

export default combineReducers({
    form: formReducer,
    departments: departmentReducer,
    categories: categoryReducer,
    products: productReducer,
    search: searchReducer,
    modals: modalReducer,
    attributes: attributeReducer,
    reviews: reviewReducer,
    cart: shoppingCartReducer,
    cartTotal: cartTotalReducer
});