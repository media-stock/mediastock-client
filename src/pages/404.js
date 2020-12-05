import React from 'react';
import { useRouter } from 'next/router';

export default function Error404Page() {
    const router = useRouter();

    React.useEffect(() => {
        router.replace({
            pathname: '/home',
            query: { ...router.query },
        });
    }, []);

    return <></>;
}
