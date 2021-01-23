import dynamic from 'next/dynamic';

export const AdminLayout = dynamic(() => import('./Layout'));
export const AdminTable = dynamic(() => import('./Table'));
export const AdminButton = dynamic(() => import('./Button'));
export * from './Spinner';
export * from './Error';

// export * from './User';
export * from './Channel';
export * from './Article';
export * from './Stock';
export * from './Banner';
