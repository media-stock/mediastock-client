import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { API_URL } from 'config';

export default function AuthSocialPage({ provider }) {
    useEffect(() => {
        if (typeof window !== 'undefined' && provider) {
            window.location.href = `${API_URL}/oauth/${provider}/authorize`;
        }
    }, []);

    return null;
}

export async function getServerSideProps({ res, params }) {
    const { provider } = params;
    return { props: { provider } };
}
