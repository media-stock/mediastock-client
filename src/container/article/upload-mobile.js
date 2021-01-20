import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import {
    ArticleUploadForm,
    ArticleUploadInput,
    ArticleUploadTextarea,
    ArticleUploadButton,
} from 'components';

export default function ArticleUploadContainer() {
    const router = useRouter();

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
    }, [input]);

    const onCancel = useCallback(() => {
        setInput({ title: '', content: '' });
    }, [input]);

    console.log(`ArticleUpload`, input);

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
