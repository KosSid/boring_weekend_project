import {combineReducers} from 'redux'
import testReducer from './test_store/testReducer';

const rootReducer = combineReducers({
  test: testReducer
})

export default rootReducer
