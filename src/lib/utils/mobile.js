import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const checkIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const mobile = router.query?.mobile === 'true';
        setIsMobile(mobile);
    }, [router]);

    return isMobile;
};
