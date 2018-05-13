import { combineReducers } from 'redux';
import components from './componentReducer';
import devices from './deviceReducer';

const RootReducer = combineReducers({
    components,
    devices
});

export default RootReducer;
