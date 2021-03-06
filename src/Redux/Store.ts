import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import axiosMiddleware from '../Services/httpClient';

import loaderReducer from './Reducers/LoaderReducer';
import loginReducer from './Reducers/LoginReducer';
import newsReducer from './Reducers/NewsReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loginState']
};

let rootReducer = combineReducers({
    loaderState: loaderReducer,
    loginState: loginReducer,
    newsState: newsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
const enhancer = [axiosMiddleware, thunk];

export default () => {
    let store = createStore(persistedReducer, {}, applyMiddleware(...enhancer))
    let persistor = persistStore(store)
    return { store, persistor }
}