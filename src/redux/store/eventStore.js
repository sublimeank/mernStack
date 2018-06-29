import { createStore ,applyMiddleware} from 'redux';
import { eventReducer } from './../reducer/eventReducer'
import thunk from 'redux-thunk'
const middleware = applyMiddleware(thunk)
export const store = createStore(eventReducer, middleware);

store.subscribe(() => {
    console.log(store.getState())
})