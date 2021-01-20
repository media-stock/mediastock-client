import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { theme } from 'config';

export default function RightIcon() {
    return (
        <Link href="/article/upload">
            <RightIconWrapper>
                <FontAwesomeIcon size="lg" icon={faPencilAlt} color={theme.primaryColor} />
            </RightIconWrapper>
        </Link>
    );
}

const RightIconWrapper = styled.div`
    position: absolute;
    right: 28px;
    margin-top: -61.5px;

    cursor: pointer;
`;
