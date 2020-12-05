import dynamic from 'next/dynamic';

export const RegisterHeader = dynamic(() => import('./Header'));
export const RegisterForm = dynamic(() => import('./Form'));
export const RegisterInput = dynamic(() => import('./Input'));
export const RegisterButton = dynamic(() => import('./Button').then((mod) => mod.RegisterButton));
export const RegisterToLoginButton = dynamic(() =>
    import('./Button').then((mod) => mod.RegisterToLoginButton),
);
