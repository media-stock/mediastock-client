import React from 'react';
import { useRouter } from 'next/router';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stockActions from 'stores/stock';

// components
import { AdminTable } from 'components';

const columns = () => [
    {
        title: 'IPO ID',
        dataIndex: 'id',
        key: 'id',
    },
];

export default function AdminStockList() {
    const router = useRouter();

    const dispatch = useDispatch();
    const { onGetIPOs, setPage } = bindActionCreators(stockActions, dispatch);

    const ipos = useSelector((state) => state.stock.toJS().ipos);
    const { data, dataCount, pending, limit, offset } = ipos;

    const onItemClick = React.useCallback((id) => {
        router.push({
            pathname: '/admin',
            query: { page: 'ipo', subPage: 'detail', id },
        });
    });

    React.useEffect(() => {
        onGetIPOs();
    }, [limit, offset]);

    return (
        <>
            <AdminTable
                columns={columns}
                data={data}
                dataCount={dataCount}
                pending={pending}
                limit={limit}
                offset={offset}
                setPage={setPage}
                onItemClick={onItemClick}
            />
        </>
    );
}
