import React, { useState, useCallback } from 'react';
import { Table, Tag, Space, Typography } from 'antd';

export default function AdminTable({
    columns,
    data,
    dataCount = data?.length,
    page = 0,
    offset = 20,
    pending = false,
    setPagination = () => {},
    onItemClick = () => {},
}) {
    const [info, setInfo] = useState({
        sortedInfo: null,
        filterInfo: null,
    });

    const onChange = useCallback((pagination, filters, sorter) => {
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
                current: page ? page + 1 : 1,
                pageSize: offset,
                onChange: (page, pageSize) => {
                    setPagination({ page: page - 1, offset: pageSize });
                },
                disabled: pending,
                showSizeChanger: true,
                pageSizeOptions: [10, 20, 50, 100, 200],
            }}
        />
    );
}
