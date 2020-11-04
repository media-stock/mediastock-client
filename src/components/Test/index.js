import dynamic from 'next/dynamic';

export const TestCascader = dynamic(() => import('./Cascader'));
export const TestList = dynamic(() => import('./List'));
export const TestObject = dynamic(() => import('./Object'));
