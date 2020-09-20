import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as styled from './styled';

export default function Loading({ view = false }) {
    if (!view) return null;

    return (
        <styled.AdminLoading>
            <CircularProgress style={{ color: 'white' }} />
        </styled.AdminLoading>
    );
}
