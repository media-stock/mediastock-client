import React from 'react';
import styled from 'styled-components';

export default function TestList({ datas }) {
    if (!Array.isArray(datas)) return null;

    const dataList = datas.map((data, index) => <TestItem key={index} data={data} />);

    return <TestListView>{dataList}</TestListView>;
}

function TestItem({ data }) {
    return (
        <TestItemView>
            {Object.entries(data).map(([key, value]) => (
                <TestItemText>
                    {key} : {JSON.stringify(value)}
                </TestItemText>
            ))}
        </TestItemView>
    );
}

const TestListView = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const TestItemView = styled.div`
    padding: 1rem 2rem;

    border: 1px solid #eaeaea;
`;

const TestItemText = styled.p``;
