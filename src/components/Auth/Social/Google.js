import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { UIButton } from 'ui';

export default function GoogleButton() {
    return (
        <Link href="/oauth/google">
            <GoogleButtonView>
                <Google>구글로 시작하기</Google>
            </GoogleButtonView>
        </Link>
    );
}

const GoogleButtonView = styled.div`
    width: 100%;
    margin-top: 10px;
`;

const Google = styled(UIButton)`
    width: 100%;
    color: ${(props) => props.theme.textBoldColor};

    border: 1px solid #d3d3d3;
    box-shadow: 10px 5px 5px #eee;
`;
