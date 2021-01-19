import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { onLogout } from 'stores/user';

export default function LogoutPage() {
    const router = useRouter();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user?.toJS()?.logined?.user);

    useEffect(() => {
        dispatch(onLogout());
        router.replace('/');
    }, []);

    return null;
}
