import React, { useState } from 'react';
import styled from 'styled-components';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryZoomContainer } from 'victory';

const dummyDataList = [
    { x: '08/01', y: 58900 },
    { x: '08/05', y: 59000 },
    { x: '08/10', y: 59100 },
    { x: '08/15', y: 59200 },
    { x: '08/20', y: 59300 },
];

const MIN_PRICE = 58900;
const MAX_PRICE = 59300;

export const PriceChart = ({ data }) => {
    const [chartWidth, setChartWidth] = useState(400);

    const [minPrice, setMinPrice] = useState(MIN_PRICE - 100);
    const [maxPrice, setMaxPrice] = useState(MAX_PRICE + 100);

    return (
        <ChartWrapper>
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ y: [minPrice, maxPrice] }}
                containerComponent={
                    <VictoryZoomContainer zommDomain={{ y: [minPrice, maxPrice] }} />
                }
            >
                <VictoryLine
                    style={{
                        data: { stroke: '#E00F0F' },
                        parent: { border: '1px solid #ccc' },
                    }}
                    data={dummyDataList}
                    animate={{
                        duration: 1000,
                        onLoad: { duration: 500 },
                    }}
                />
            </VictoryChart>
        </ChartWrapper>
    );
};

const ChartWrapper = styled.div`
    width: 100%;
    height: 300px;
`;
