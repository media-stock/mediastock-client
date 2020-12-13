import React, { useEffect } from 'react';
import { SOCKET_URL } from 'config';

// redux
import { useDispatch } from 'react-redux';
import * as socketActions from 'stores/socket';

export default function SocketPage() {
    // const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window === 'undefined') return;
    }, []);

    return null;
}
