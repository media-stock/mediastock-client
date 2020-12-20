import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { UIHeaderText } from 'ui';

export default function Header({ logo, href = '/', as }) {
    if (href && !as) as = href;

    return (
        <Link href={href} as={as}>
            <HeaderView>
                <Logo>{logo}</Logo>
            </HeaderView>
        </Link>
    );
}

const HeaderView = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 20px;
`;

const Logo = styled(UIHeaderText)`
    flex: 1;
    text-align: center;
`;
