import React from 'react';
import Field from './field';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import fieldReducer from './field.reducers';
import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({
    field: fieldReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
	    <Field initialValue={'Teste'} />
    </Provider>,
    document.getElementById('app')
)