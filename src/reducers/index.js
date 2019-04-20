import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import departmentReducer from './departmentReducers';

export default combineReducers({
    form: formReducer,
    departments: departmentReducer
});