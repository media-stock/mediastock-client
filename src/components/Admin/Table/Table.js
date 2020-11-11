import React, { useState, useCallback } from 'react';
import { Table } from 'antd';

export default function AdminTable({
    columns,
    data,
    dataCount = data?.length,
    pending = false,
    limit,
    setPage = () => {},
    onItemClick = () => {},
    onChangePage = () => {},
}) {
    const [info, setInfo] = useState({
        sortedInfo: null,
        filterInfo: null,
    });

    const onChange = useCallback((pagination, filters, sorter) => {
        // / console.log('Various parameters', pagination, filters, sorter);

        setInfo({
            sortedInfo: sorter,
            filterInfo: filters,
        });
    });

    const customColumns = columns(info);

    return (
        <Table
            bordered
            columns={customColumns}
            dataSource={data}
            onChange={onChange}
            onRow={(record, rowIndex) => ({
                onClick: () => onItemClick(record?.id),
            })}
            pagination={{
                total: dataCount,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                onChange: (page, pageSize) => {
                    if (limit !== pageSize) {
                        setPage({ limit: pageSize });
                    } else {
                        setPage({ offset: (page - 1) * pageSize });
                    }
                },
                disabled: pending,
                showSizeChanger: true,
                pageSize: limit,
                pageSizeOptions: [10, 20, 50, 100, 200],
            }}
        />
    );
}
