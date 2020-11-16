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
    const { setIPOsReset, setIPOsPage, onGetIPOs, onGetIPO } = bindActionCreators(
        stockActions,
        dispatch,
    );

    const { ipos, ipo } = useSelector((state) => ({
        ipos: state.stock.toJS().ipos,
        ipo: state.stock.toJS().ipo,
    }));
    const { data, dataCount, pending, limit, offset } = ipos;

    const onItemClick = React.useCallback((id) => {
        router.push({
            pathname: '/admin',
            query: { page: 'ipo', subPage: 'detail', id },
        });
    });

    React.useEffect(() => {
        if (offset === 0) setIPOsReset();
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
                setPage={setIPOsPage}
                onItemClick={onItemClick}
            />
        </>
    );
}
