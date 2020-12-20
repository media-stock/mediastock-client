import dynamic from 'next/dynamic';

export const SocialKakaoButton = dynamic(() => import('./Kakao'));
export const SocialGoogleButton = dynamic(() => import('./Google'));
