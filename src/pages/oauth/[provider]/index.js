import { useEffect } from 'react';
import { API_URL } from 'config';

export default function AuthSocialPage({ provider }) {
    useEffect(() => {
        if (typeof window !== 'undefined' && provider) {
            const SOCIAL_URL = `${API_URL}/oauth/${provider}/authorize`;
            window.location.href = SOCIAL_URL;
        }
    }, []);

    return null;
}

export async function getServerSideProps({ res, params }) {
    const { provider } = params;
    return { props: { provider } };
}
