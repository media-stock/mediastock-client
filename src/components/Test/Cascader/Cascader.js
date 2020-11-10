import React, { useCallback } from 'react';
import Link from 'next/link';
import { Cascader as AntdCascader } from 'antd';
import { options } from './options';

export default function Cascader({ label, setLabel }) {
    const onChange = useCallback((value) => {
        const lastLabel = Array.isArray(value) ? value[value?.length - 1] : null;
        setLabel(lastLabel);
    });

    const displayRender = useCallback((labels, selectedOptions) => {
        // console.log(`displayRender`, labels, selectedOptions);

        return labels.map((label, i) => {
            const option = selectedOptions[i];

            if (i === labels.length - 1) {
                return <span key={option?.value}>{label}</span>;
            }

            return <span key={option?.value}>{label} - </span>;
        });
    });

    return (
        <AntdCascader
            style={{ width: '25%' }}
            expandTrigger="hover"
            options={options}
            displayRender={displayRender}
            onChange={onChange}
        />
    );
}
