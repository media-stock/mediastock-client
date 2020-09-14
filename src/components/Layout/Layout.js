import React from 'react';
import Head from 'next/head';
import * as styled from './styled';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'stores/user';

// utils
import { parseRefreshTimestamp } from 'lib/utils';

function Layout({ children }) {
    return (
        <>
            <Head>
                <meta
                    id="viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
                />
            </Head>

            <styled.LayoutWrapper>
                <styled.Layout>{children}</styled.Layout>
            </styled.LayoutWrapper>
        </>
    );
}

export default connect(
    (state) => ({
        userState : state.user.toJS()
    }),
    (dispatch) => ({
        userActions : bindActionCreators(userActions, dispatch)
    })
)(Layout);
