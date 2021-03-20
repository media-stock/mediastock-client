import React from 'react';
import styled from 'styled-components';
import { UIText } from 'ui';

export default function PriceInfo({ orderInfo }) {
    if (!orderInfo) return null;

    console.log(orderInfo);

    return (
        <PriceInfoWrapper>
            <PriceInfoItemWrapper>
                <PriceInfoKey>기준가</PriceInfoKey>
                <PriceInfoValue>{orderInfo?.standardPrice}</PriceInfoValue>
            </PriceInfoItemWrapper>

            <PriceInfoItemWrapper>
                <PriceInfoKey>시가</PriceInfoKey>
                <PriceInfoValue>{orderInfo?.openPrice}</PriceInfoValue>
            </PriceInfoItemWrapper>

            <PriceInfoItemWrapper>
                <PriceInfoKey>고가</PriceInfoKey>
                <PriceInfoValue>{orderInfo?.highPrice}</PriceInfoValue>
            </PriceInfoItemWrapper>

            <PriceInfoItemWrapper>
                <PriceInfoKey>저가</PriceInfoKey>
                <PriceInfoValue>{orderInfo?.lowPrice}</PriceInfoValue>
            </PriceInfoItemWrapper>

            <PriceInfoItemWrapper>
                <PriceInfoKey>거래량</PriceInfoKey>
                <PriceInfoValue>{orderInfo?.tranasctionVolume}</PriceInfoValue>
            </PriceInfoItemWrapper>

            <PriceInfoItemWrapper>
                <PriceInfoKey>전일 거래량</PriceInfoKey>
                <PriceInfoValue>{orderInfo?.prevTransactionVolume}</PriceInfoValue>
            </PriceInfoItemWrapper>

            <PriceInfoItemWrapper>
                <PriceInfoKey>상한가</PriceInfoKey>
                <PriceInfoValue>{Math.floor((orderInfo?.openPrice || 0) * 1.3)}</PriceInfoValue>
            </PriceInfoItemWrapper>

            <PriceInfoItemWrapper>
                <PriceInfoKey>하한가</PriceInfoKey>
                <PriceInfoValue>{Math.floor((orderInfo?.openPrice || 0) * 0.7)}</PriceInfoValue>
            </PriceInfoItemWrapper>
        </PriceInfoWrapper>
    );
}

const PriceInfoWrapper = styled.div``;

const PriceInfoItemWrapper = styled.div`
    width: 100%;
    margin-bottom: 12px;

    display: flex;
    align-items: center;
`;

const PriceInfoKey = styled(UIText)`
    width: 74px;
    margin-right: 10px;
`;

const PriceInfoValue = styled(UIText)`
    width: calc(100% - 84px);
    text-align: right;
`;
