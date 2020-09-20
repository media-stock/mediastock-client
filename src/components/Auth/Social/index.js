import dynamic from 'next/dynamic';

export const SocialButton = dynamic(()=>import('./Button'));
export const SocialWrapper = dynamic(()=>import('./Wrapper'));