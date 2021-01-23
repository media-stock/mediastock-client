import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
    ArticleUploadForm,
    ArticleUploadInput,
    ArticleUploadTextarea,
    ArticleUploadButton,
} from 'components';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { onCreateArticle } from 'stores/article';

export default function ArticleUploadContainer() {
    const router = useRouter();

    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.user?.toJS().logined?.accessToken);
    const createArticle = useSelector((state) => state.article.toJS().createArticle);

    const [input, setInput] = useState({
        title: '',
        content: '',
    });

    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInput({ ...input, [name]: value });
        },
        [input],
    );

    const onSave = useCallback(() => {
        console.log(`onSave`, input);

        if (!accessToken) {
            alert('로그인을 먼저 해주세요!');
            return;
        }

        dispatch(onCreateArticle({ article: input }));
    }, [input]);

    const onCancel = useCallback(() => {
        setInput({ title: '', content: '' });
    }, [input]);

    useEffect(() => {
        if (createArticle?.done) {
            router.replace('/article');
        }
        if (createArticle?.error) {
            alert('글을 작성하는데 오류가 발생하였습니다.');
        }
    }, [createArticle?.done, createArticle?.error]);

    return (
        <>
            <ArticleUploadForm>
                <ArticleUploadInput
                    name="title"
                    placeholder="제목을 입력해주세요"
                    value={input.title}
                    onChange={onChange}
                />
                <ArticleUploadTextarea
                    name="content"
                    placeholder="내용을 입력해주세요"
                    value={input.content}
                    onChange={onChange}
                />

                <ArticleUploadButton isSaveButton label="저장" onClick={onSave} />
                <ArticleUploadButton isCancelButton label="취소" onClick={onCancel} />
            </ArticleUploadForm>
        </>
    );
}
