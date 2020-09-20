import dynamic from 'next/dynamic';

export const LoginForm = dynamic(()=>import('./Form'));
export const LoginInput = dynamic(()=>import('./Input'));
export const LoginButton = dynamic(()=>import('./Button'));