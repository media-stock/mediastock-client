import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import ReactModal from 'react-modal';

const initStyles = {
    content: {
        width: '100%',
        padding: '0',

        position: 'fixed',
        top: '15%',
        bottom: '0',
        left: `0`,
        right: `0`,
        border: 0,
        borderTopLeftRadius: '14px',
        borderTopRightRadius: '14px',

        overflow: 'hidden',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
};

const customStyles = (styles = initStyles) => ({ ...initStyles, ...styles });

export default function Modal({ children, view = false, styles = null, onCancel }) {
    const router = useRouter();

    const onBack = useCallback(() => {
        if (onCancel) {
            onCancel();
        } else {
            router.back();
        }
    }, [router]);

    return (
        <ReactModal
            isOpen={view}
            onRequestClose={onBack}
            style={customStyles(styles)}
            ariaHideApp={false}
        >
            {children}
        </ReactModal>
    );
}
