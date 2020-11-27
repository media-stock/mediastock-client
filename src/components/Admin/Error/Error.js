import React from 'react';
import styled from 'styled-components';

import { message } from 'antd';

export default function AdminError({ error }) {
    React.useEffect(() => {
        if (error) {
            message.error(JSON.stringify(error));
        }
    }, [error]);

    return null;
}

const ErrorView = styled.div`
    width: 100%;

    position: fixed;
    bottom: 0;
    left: 0;
`;
