import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import immutableTransform from 'redux-persist-transform-immutable';

import { serializeState, deserializeState } from 'lib';

// middlewares
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import auth from 'stores/auth';
import user from 'stores/user';
import main from 'stores/main';
import article from 'stores/article';
import channel from 'stores/channel';
import stock from 'stores/stock';

import home from 'stores/home';
import market from 'stores/market';

const rootReducers = combineReducers({
    auth,
    user,
    main,
    article,
    channel,
    stock,

    home,
    market,
});

const getReducers = (state = {}, action) =>
    action?.type === HYDRATE ? action.payload : rootReducers(state, action);

const getMiddlewares = () => {
    const middlewares = [ReduxThunk];

    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        middlewares.push(logger);
        return composeWithDevTools(applyMiddleware(...middlewares));
    }

    return applyMiddleware(...middlewares);
};

const makeConfiguredStore = (reducer) => createStore(reducer, undefined, getMiddlewares());

const makeStore = () => {
    if (typeof window === 'undefined') return makeConfiguredStore(rootReducers);

    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
        transforms: [immutableTransform()],
        key: 'next.js',
        whitelist: [''],
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, getReducers);
    const store = makeConfiguredStore(persistedReducer);
    store.__persistor = persistStore(store);

    return store;
};

export const wrapper = createWrapper(makeStore, { serializeState, deserializeState, debug: false });

export const wrapperComponent = (Component, initAction) => {
    Component.getInitialProps = async ({ store, query }) => {
        // 서버일때는 데이터 fetch => { dispatch, state }
        if (typeof window === 'undefined') {
            if (typeof initAction === 'function') await store.dispatch(initAction(query));

            if (initAction && Array.isArray(initAction)) {
                await Promise.all(initAction.map((action) => store.dispatch(action(query))));
            }

            return { dispatch: store.dispatch, state: store.getState() };
        }

        // 클라이언트일때는 {}
        return {};
    };

    // 서버일때는 getInitialProps에서 받아오므로 바로 return
    if (typeof window === 'undefined') return Component;

    // 클라이언트일때는 빈 오브젝트를 받았으므로 connect를 통해서 서버와 동일하게 props 전달
    return connect((state, dispatch) => ({ state, dispatch }))(Component);
};
