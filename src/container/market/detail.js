import React, { useState } from 'react';

import { MarketDetailTabView } from 'components';

export default function MeTalkMarketDetailContainer({ state, dispatch }) {
    const [tab, setTab] = useState('price');

    const market = state.market?.toJS()?.market;
    const { data, pending, error } = market;

    return (
        <>
            <MarketDetailTabView tab={tab} setTab={setTab} />
            {JSON.stringify(market)}
        </>
    );
}
