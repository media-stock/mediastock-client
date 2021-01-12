import axios from 'axios';
import queryString from 'query-string';

const dev = process.env.NODE_ENV === 'development' && typeof window !== 'undefined';
const DEV_SERVER = 'https://8r6rvn3xd8.execute-api.ap-northeast-2.amazonaws.com/dev';
const SERVER = DEV_SERVER;

export class Request {
    static onError(error) {
        if (error.response) {
            // 반응은 왔지만 에러 발생
            console.log(error.response);

            const { status, data } = error?.response;
            return { status, data };
        }
        if (error.request) {
            // 요청을 했지만 응답을 받지 못함
            console.log(error.request);
        } else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('Error', error.message);
        }

        return {
            status: '500',
            data: 'Server Internal Error',
        };
    }

    static onQuery(query = null) {
        if (!query) return '';
        if (Object.keys(query)?.length === 0) return '';

        Object.entries(query).map(([key, value]) => {
            if (typeof value !== 'number' && typeof value !== 'boolean' && !value)
                delete query[key];
        });

        const parsedQueryString = queryString.stringify(query);
        return `?${parsedQueryString}`;
    }

    static getEndpoint() {
        const url = dev ? DEV_SERVER : SERVER;
        return url;
    }

    static getAuthorizationHeader(accessToken) {
        return { Authorization: `Bearer ${accessToken}` };
    }

    static async onRequestGet({ url, query, headers }) {
        try {
            return await this.tryRequestGet({ url, query, headers });
        } catch (error) {
            return this.onError(error);
        }
    }

    static async tryRequestGet({ url, query, headers }) {
        url = this.getEndpoint() + url + this.onQuery(query);

        const response = await axios.get(url, { headers });
        const status = response?.status;
        const data = response?.data;
        dev && console.log(`tryRequestGet`, url, headers, response);

        return { status, data };
    }

    static async onRequestPost({ url, query, params, headers }) {
        try {
            return await this.tryRequestPost({ url, query, params, headers });
        } catch (error) {
            return this.onError(error);
        }
    }

    static async tryRequestPost({ url, query, params, headers }) {
        url = this.getEndpoint() + url + this.onQuery(query);

        const response = await axios.post(url, params, { headers });
        const status = response?.status;
        const data = response?.data;

        dev && console.log(`tryRequestPost`, url, params, headers, response);

        return { status, data };
    }

    static async onRequestPatch({ url, query, params, headers }) {
        try {
            return await this.tryRequestPatch({ url, query, params, headers });
        } catch (error) {
            return this.onError(error);
        }
    }

    static async tryRequestPatch({ url, query, params, headers }) {
        url = this.getEndpoint() + url + this.onQuery(query);

        const response = await axios({
            method: 'PATCH',
            url,
            data: params,
            headers,
        });
        const status = response?.status;
        const data = response?.data;

        dev && console.log(`tryRequestPatch`, url, params, headers, response);

        return { status, data };
    }

    static async onRequestDelete({ url, query, params, headers }) {
        try {
            return await this.tryRequestDelete({ url, query, params, headers });
        } catch (error) {
            this.onError(error);
        }
    }

    static async tryRequestDelete({ url, query, params, headers }) {
        url = this.getEndpoint() + url + this.onQuery(query);

        const response = await axios({
            method: 'DELETE',
            url,
            data: params,
            headers,
        });
        const status = response?.status;
        const data = response?.data;

        dev && console.log(`tryRequestPatch`, url, params, headers, response);

        return { status, data };
    }
}
