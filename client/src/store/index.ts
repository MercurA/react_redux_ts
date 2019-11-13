import {userReducer} from './reducer';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    users: userReducer
});

export type GlobalState = ReturnType<typeof rootReducer>;

export default function configStore() {
    const middlewares = [thunkMiddleware];
    const middlewaresEnchancers = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, middlewaresEnchancers);

    return store;
}
