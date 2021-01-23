import React from 'react';

import { Helmet } from 'components';
import { metalkMarketDetailHelemt as helmet } from 'config';

import { wrapperComponent } from 'stores';
import { onGetMarket } from 'stores/market';

import MarketDetailContainer from 'container/market/detail';

function MarketDetailPage({ state, dispatch }) {
    const market = state.market?.toJS()?.market;
    const { data } = market;

    return (
        <>
            <Helmet helmet={helmet(data?.name)} />
            <MarketDetailContainer state={state} dispatch={dispatch} />
        </>
    );
}

export default wrapperComponent(MarketDetailPage, onGetMarket);
