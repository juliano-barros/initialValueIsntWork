import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProfileReducer from './profile_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  profile: ProfileReducer
});

export default rootReducer;