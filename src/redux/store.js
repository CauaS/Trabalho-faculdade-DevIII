import { createStore , applyMiddleware, compose } from 'redux';
import  rootReducer   from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
    compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools())
);

sagaMiddleware.run(rootSaga)

export default store;