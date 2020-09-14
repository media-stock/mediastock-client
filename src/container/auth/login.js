import React, { useCallback } from 'react';
import Router from 'next/router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function LoginContainer(props) {
    return(
        <>
            Login Container
        </>
    );
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({

    }),
)(LoginContainer);
