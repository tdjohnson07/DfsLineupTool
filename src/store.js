import {createStore, combineReducers} from 'redux';
import {playerListReducer} from './reducers/playerListReducer';

const reducers = combineReducers({playerListReducer});

export default createStore(reducers);