import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from './reducers/index';

const store = createStore(rootReducer, undefined, compose(
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

persistStore(store);

export default store;
