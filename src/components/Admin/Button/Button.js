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
    before = [],
    after = [],
}) {
    return (
        <ButtonListView>
            <BeforeButtonList before={before}>
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
            </BeforeButtonList>
            <AfterButtonList after={after}>
                {reloadText && (
                    <Button type="primary" onClick={onReload}>
                        {reloadText}
                    </Button>
                )}
            </AfterButtonList>
        </ButtonListView>
    );
}

const BeforeButtonItem = ({ button }) => {
    return (
        <Button
            onClick={button?.onClick}
            style={{ marginRight: '10px', ...button?.style }}
            type={button?.type}
        >
            {button.text}
        </Button>
    );
};

function BeforeButtonList({ before, children }) {
    if (!Array.isArray(before)) return null;

    const buttonList = before?.map((button, index) => (
        <BeforeButtonItem key={`before-button-${index}`} button={button} />
    ));

    return (
        <BeforeButtonListView>
            {children}
            {buttonList}
        </BeforeButtonListView>
    );
}

const AfterButtonItem = ({ button }) => {
    return (
        <Button
            onClick={button?.onClick}
            style={{ marginRight: '10px', ...button?.style }}
            type={button?.type}
        >
            {button.text}
        </Button>
    );
};

function AfterButtonList({ children, after }) {
    if (!after || !Array.isArray(after)) return null;

    const buttonList = after?.map((button, index) => (
        <AfterButtonItem key={`after-button-${index}`} button={button} />
    ));

    return (
        <AfterButtonListView>
            {buttonList}
            {children}
        </AfterButtonListView>
    );
}

const ButtonListView = styled.div`
    margin-bottom: 1.5rem;

    display: flex;
    align-items: center;
`;

const BeforeButtonListView = styled(ButtonListView)`
    margin-bottom: 0;
`;

const AfterButtonListView = styled(ButtonListView)`
    margin-left: auto;
    margin-bottom: 0;
`;
