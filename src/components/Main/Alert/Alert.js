import React from 'react';
import styled from 'styled-components';
import { Alert } from 'antd';

export default function MainAlert({ error, setError }) {
    React.useEffect(() => {
        if (error && error !== '') {
            setTimeout(() => {
                setError('');
            }, 1500);
        }
    }, [error]);

    if (!error || error === '') return null;

    return (
        <AlertView>
            <Alert banner type="error" message={error} />
        </AlertView>
    );
}

const AlertView = styled.div`
    width: 100%;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;
