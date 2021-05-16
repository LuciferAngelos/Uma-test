import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga/sagas'
import usersReducer from './usersReducer'
import { goodsCollectionReducer } from './goodsReducer'


const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = compose(
	applyMiddleware(sagaMiddleware));

const rootReducer = combineReducers({
	usersReducer,
	goodsCollectionReducer
})
const store = createStore(
	rootReducer,
	composedEnhancers
)

export default store;

window.__store__ = store

sagaMiddleware.run(rootWatcher);

