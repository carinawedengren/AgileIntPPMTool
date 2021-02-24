import { combineReducers } from 'redux';
import errorReducer from './errorReducer';

// This is going in the store
export default combineReducers({
    errors: errorReducer
});