import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { List, Image } from 'antd';

// redux
import { useDispatch, useSelector } from 'react-redux';
import * as adminActions from 'stores/admin';

export default function AdminBannerList() {
    const router = useRouter();
    const subPage = router.query?.subPage;

    const dispatch = useDispatch();

    const banners = useSelector((state) => state.admin.toJS().banners);
    const { data, done } = banners;

    const onDeleteItem = useCallback(
        (item) => {
            if (!done) return;

            // eslint-disable-next-line no-restricted-globals
            const userResponse = confirm('정말로 삭제하시겠습니까?');
        },
        [done],
    );

    useEffect(() => {}, []);

    return (
        <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={['/logo.png', '/logo.png']}
            renderItem={(item) => (
                <List.Item>
                    <Image
                        src={item}
                        style={{ border: '1px solid #ddd' }}
                        preview={false}
                        onClick={() => onDeleteItem(item)}
                    />
                </List.Item>
            )}
        />
    );
}
