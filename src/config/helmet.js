export const defaultHelmet = {
    title: '미디어스톡',
    description: '',
    image: 'https://mediastock.alpox.kr/logo.png',
    keywords: [''].join(' '),
    url: '',
};

export const loginHelmet = {
    title: '로그인 - 미디어스톡',
};

export const registerHelmet = {
    title: '회원가입 - 미디어스톡',
};

export const adminHelmet = {
    title: '어드민 - 미디어스톡',
};

export const articleListHelmet = (image) => ({
    title: `Media's Talk - 미디어스톡`,
});

export const articleDetailHelmet = (title) => ({
    title: `${title} - 미디어스톡`,
});

export const articleUploadHelmet = {
    title: '게시글 업로드 - 미디어스톡',
};

export const moreHelmet = {
    title: '더보기 - 미디어스톡',
};

export const myChannelHelmet = {
    title: '내 채널 - 미디어스톡',
};

export const metalkMarketHelmet = {
    title: '미톡마켓 - 미디어스톡',
};

export const metalkMarketDetailHelemt = (title) => ({
    title: `${title || ''} 마켓 - 미디어스톡`,
});
