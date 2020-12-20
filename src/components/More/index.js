import dynamic from 'next/dynamic';

export const MoreMenuList = dynamic(() => import('./MenuList'));
export const MoreNoticeList = dynamic(() => import('./NoticeList'));
export const MoreQuestionList = dynamic(() => import('./QuestionList'));
export const MoreReportList = dynamic(() => import('./ReportList'));
export const MoreInfoList = dynamic(() => import('./InfoList'));
