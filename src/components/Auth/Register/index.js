import dynamic from 'next/dynamic';

export const RegisterForm = dynamic(() => import('./Form'));
export const RegisterInput = dynamic(() => import('./Input'));
export const RegisterButton = dynamic(() => import('./Button'));
