import dynamic from 'next/dynamic';

export const LoginHeader = dynamic(() => import('./Header'));
export const LoginForm = dynamic(() => import('./Form'));
export const LoginInput = dynamic(() => import('./Input'));
export const LoginButton = dynamic(() => import('./Button').then((mod) => mod.LoginButton));
export const LoginToRegisterButton = dynamic(() =>
    import('./Button').then((mod) => mod.LoginToRegisterButton),
);
