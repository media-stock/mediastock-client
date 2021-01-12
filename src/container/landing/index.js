import React, { useState } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from 'stores/main';

// components
import { MainCover, MainEmail, MainFooter, MainAlert, Spinner } from 'components';

// utils
import { useMediaQuery } from 'react-responsive';

export default function LandingContainer() {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

    const [error, setError] = useState('');

    const { email } = useSelector((state) => ({
        email: state.main.toJS().email,
    }));
    const { pending, done } = email;

    const dispatch = useDispatch();
    const { onEmail } = bindActionCreators(mainActions, dispatch);

    return (
        <LandingContainerView>
            <MainCover cover={isMobile ? '/main-cover-mobile.png' : '/main-cover.png'} />
            <MainEmail onEmail={onEmail} isMobile={isMobile} setError={setError} />
            <MainFooter />
            <Spinner view={pending} />
            <MainAlert error={error} setError={setError} />
        </LandingContainerView>
    );
}

const LandingContainerView = styled.div`
    width: 100%;
    min-height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
`;
