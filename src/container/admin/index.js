import React from 'react';
import { useRouter } from 'next/router';

import UserContainer from './user';
import ArticleContainer from './article';
import ChannelContainer from './channel';
import StockContainer from './stock';
import BannerContainer from './banner';

export default function AdminContainer() {
    const router = useRouter();
    const { page, subPage } = router.query;

    return (
        <>
            {page === 'user' && <UserContainer subPage={subPage} />}
            {page === 'article' && <ArticleContainer subPage={subPage} />}
            {page === 'channel' && <ChannelContainer subPage={subPage} />}
            {page === 'stock' && <StockContainer subPage={subPage} />}
            {page === 'banner' && <BannerContainer subPage={subPage} />}
        </>
    );
}
