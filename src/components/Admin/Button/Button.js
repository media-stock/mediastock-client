import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

export default function AdminButtonList({
    createText,
    onCreate,
    updateText,
    onUpdate,
    deleteText,
    onDelete,
    reloadText,
    onReload,
}) {
    return (
        <ButtonListView>
            {createText && (
                <Button danger onClick={onCreate} style={{ marginRight: '10px' }}>
                    {createText}
                </Button>
            )}
            {deleteText && (
                <Button danger onClick={onDelete} style={{ marginRight: '10px' }}>
                    {deleteText}
                </Button>
            )}
            {updateText && (
                <Button type="primary" onClick={onUpdate} style={{ marginRight: '10px' }}>
                    {updateText}
                </Button>
            )}
            {reloadText && (
                <Button type="primary" onClick={onReload} style={{ marginLeft: 'auto' }}>
                    {reloadText}
                </Button>
            )}
        </ButtonListView>
    );
}

const ButtonListView = styled.div`
    margin-bottom: 1.5rem;

    display: flex;
    align-items: center;
`;
