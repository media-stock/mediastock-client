import React, { useState } from 'react';

import { MarketDetailTabView, PriceChart, MarketPriceInfo } from 'components';

export default function MeTalkMarketDetailContainer({ state, dispatch }) {
    const [tab, setTab] = useState('price');

    const market = state.market?.toJS()?.market;
    const marketStockOrders = state.market.toJS()?.marketStockOrders;

    console.log(`MarketStockOrders`, marketStockOrders);

    return (
        <>
            <MarketDetailTabView tab={tab} setTab={setTab} />
            {tab === 'price' && (
                <MarketPriceInfo
                    orderInfo={marketStockOrders?.done ? marketStockOrders?.data?.orderInfo : null}
                />
            )}
            {tab === 'chart' && <PriceChart />}
        </>
    );
}
