import {combineReducers} from 'redux'
import testReducer from './test_store/testReducer';
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  test: testReducer,
  user: userReducer
})

export default rootReducer
