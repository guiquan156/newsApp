// import fetch from 'dva/fetch';

const API_KEY = '90a60c911eeb474682ad03f641a460a8';

// ?q=bitcoin&from=2019-01-24&sortBy=publishedAt&apiKey=API_KEY
export const url: newsApi = {
    topHeadlines: 'https://newsapi.org/v2/top-headlines',
    everything: 'https://newsapi.org/v2/everything',
    sources: 'https://newsapi.org/v2/sources'
};


function formatUrlWidthParam (url: string, params: everythingParams): string {
    const isFirstParam: boolean = url.indexOf('?') === -1;
    const paramsStr = Object.keys(params).reduce((rec: Array<string>, key: string) => {
        rec.push(key + '=' + params[key]);
        return rec;
    }, []).join('&');
    return `${url}${isFirstParam ? '?' : '&'}${paramsStr}`;
}

async function fetchGet (url: string) {
    const res = await fetch(url, {
        headers: {
            'X-Api-Key': API_KEY
        }
    });

    console.log(res);

    if (res.ok) {
        const resData = res.json();
        return Promise.resolve(resData);
    } else {
        // 非200的认为错误
        return Promise.reject(res);
    }
}

// 获取所有信息
export function everything (params: everythingParams) {
    const _url = formatUrlWidthParam(url.everything, params);
    return fetchGet(_url);
}

// 头条
export async function topHeadlines (params: topHeadlinesParams) {
    const _url = formatUrlWidthParam(url.topHeadlines, params);
    return fetchGet(_url);
}