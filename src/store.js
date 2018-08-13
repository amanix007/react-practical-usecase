import { createStore,compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import { offline } from '@redux-offline/redux-offline';
import defaultConfig from '@redux-offline/redux-offline/lib/defaults';


import reducers from "./rootReducer";



import createHistory from "history/createBrowserHistory";

export const history = createHistory();


const middleware = routerMiddleware(history);



const offlineConfig = {
    ...defaultConfig,
    persistOptions: {
        ...defaultConfig.persistOptions,
        blacklist: [
            'form',
            'ui',
            'router',
            'airports'
        ]
    }
}

export const store =
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
        ?
        createStore(
            reducers,
            compose(
                applyMiddleware(thunk, middleware),
                offline(offlineConfig),
                window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        )
        : createStore(
            reducers,
            compose(
                applyMiddleware(thunk, middleware),
                offline(offlineConfig)
            )
        );
