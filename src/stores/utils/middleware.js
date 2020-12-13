import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import { SOCKET_URL } from 'config';

// import reduxWebsocket from '@giantmachines/redux-websocket';

// const reduxWebsocketMiddleware = reduxWebsocket({
//     onOpen: (socket) => {
//         console.log(socket);
//     },
// });

const middleware = () => {
    const middleware = [ReduxThunk];
    const devMiddleware = [logger, ReduxThunk];

    if (process.env.NODE_ENV === 'development') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...devMiddleware));
    }

    return applyMiddleware(...middleware);
};

export default middleware;
