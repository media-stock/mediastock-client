import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function getWindowDimensions() {
    if (typeof window === 'undefined') return { width: 0, height: 0 };

    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export function useMobileCheck(pathname = null) {
    const router = useRouter();
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        if (pathname) {
            window.removeEventListener('resize', handleResize);
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (windowDimensions?.width < 740) {
            router.replace({
                pathname: pathname || router.pathname,
                query: { ...router.query, mobile: true },
            });
        } else if (windowDimensions?.width && windowDimensions?.width >= 740) {
            router.replace({
                pathname: router.pathname,
                query: { ...router.query, mobile: false },
            });
        }
    }, [windowDimensions?.width]);

    return windowDimensions?.width < 740;
}
