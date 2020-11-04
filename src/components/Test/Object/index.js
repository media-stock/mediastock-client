import React from 'react';
import styled from 'styled-components';

export default function TestObject({ data }) {
    if (!data || typeof data !== 'object') return null;

    return (
        <TestObjectView>
            {Object.entries(data).map(([key, value]) => (
                <TestObjectText>
                    {key} : {JSON.stringify(value)}
                </TestObjectText>
            ))}
        </TestObjectView>
    );
}

const TestObjectView = styled.div`
    margin: 2rem 0;
    padding: 1rem 2rem;
`;

const TestObjectText = styled.p``;
