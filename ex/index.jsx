import React from 'react';
import Counter from './counter'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import counterReducer from './counter.reducers';
import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
    counter: counterReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
	    <Counter />
    </Provider>,
    document.getElementById('app')
)