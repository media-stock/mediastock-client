import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Modal, Form, Input, Select, Col, Row, message } from 'antd';
import { AdminSpinner, AdminError } from 'components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from 'stores/article';

const { Search } = Input;
// const { Option } = Select;

export default function AdminArticleCreate({ width = 1000 }) {
    const router = useRouter();
    const create = router.query?.create;
    if (create !== 'true') return null;

    const dispatch = useDispatch();
    const { setPage, onGetArticles, onCreateArticle } = bindActionCreators(
        articleActions,
        dispatch,
    );

    const { createArticle } = useSelector((state) => ({
        createArticle: state.article.toJS().create,
    }));
    const { done, pending, error } = createArticle;

    const [input, setInput] = useState({
        boardId: '',
    });

    const [select, setSelect] = useState({
        title: '',
        content: '',
        boardId: null,
    });

    const onChangeInput = useCallback((e) => {
        const { name, value } = e.target;

        setInput({
            ...input,
            [name]: value,
        });
    });

    const onChangeSelect = useCallback(({ name, value }) => {
        setSelect({
            ...select,
            [name]: value,
        });
    });

    const onOk = useCallback(() => {
        const article = { ...select };
        if (!select?.boardId) article.boardId = input?.boardId;

        for (const [key, value] of Object.entries(article)) {
            if (!value || value === '') delete article[key];
        }

        onCreateArticle({ article });
    });

    const onCancel = useCallback(() => {
        router.back();
    });

    useEffect(() => {
        if (done) {
            setPage({ page: 0, offset: 20 });
            onGetArticles();

            message.success('글이 생성되었습니다.');
            onCancel();
        }
    }, [done]);

    return (
        <Modal
            title="게시판 글 만들기"
            centered
            visible={create === 'true'}
            width={width}
            onCancel={onCancel}
            onOk={onOk}
        >
            <AdminArticleCreateView>
                <Form labelCol={{ span: 3 }} wrapperCol={{ span: 20 }}>
                    <Form.Item label="제목">
                        <Input
                            name="title"
                            value={select.title}
                            placeholder="글 제목을 입력해주세요"
                            onChange={(e) => onChangeSelect(e.target)}
                        />
                    </Form.Item>

                    <Form.Item label="내용">
                        <Input
                            name="content"
                            value={select.content}
                            placeholder="글 내용을 입력해주세요"
                            onChange={(e) => onChangeSelect(e.target)}
                        />
                    </Form.Item>

                    <Form.Item label="게시판 ID">
                        <Row>
                            <Col span={15}>
                                <Search
                                    name="boardId"
                                    value={input.boardId}
                                    onChange={onChangeInput}
                                    enterButton
                                    loading={false}
                                    placeholder="게시판 ID를 검색해주세요"
                                />
                            </Col>
                            <Col span={7}>
                                <Select style={{ marginLeft: '20px' }} />
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </AdminArticleCreateView>
            <AdminSpinner view={pending} />
            <AdminError error={error} />
        </Modal>
    );
}

const AdminArticleCreateView = styled.div``;
