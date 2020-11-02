import React, { useCallback } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from 'stores/main';

// components
import {
    MainFirstPage,
    MainSecondPage,
    MainThirdPage,
    MainFourthPage,
    MainFooter,
    Spinner,
} from 'components';

export default function IndexContainer() {
    const { email } = useSelector((state) => ({
        email: state.main.toJS().email,
    }));
    const { pending, done } = email;

    const dispatch = useDispatch();
    const { onEmail } = bindActionCreators(mainActions, dispatch);

    return (
        <IndexContainerView>
            <MainFirstPage />
            <MainSecondPage />
            <MainThirdPage />
            <MainFourthPage onEmail={onEmail} />
            <MainFooter />
            <Spinner view={pending} />
        </IndexContainerView>
    );
}

const IndexContainerView = styled.div`
    width: 100%;
    min-height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
`;
