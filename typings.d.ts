declare module '*.css';
declare module "*.png";

type newsApi = {
    topHeadlines: string;
    everything: string;
    sources: string;
};

type topHeadlinesParams = {
    country?: 'ae'|'ar'|'at'|'au'|'be'|'bg'|'br'|'ca'|'ch'|'cn'|'co'|'cu'|'cz'|'de'|'eg'|'fr'|'gb'|'gr'|'hk'|'hu'|'id'|'ie'|'il'|'in'|'it'|'jp'|'kr'|'lt'|'lv'|'ma'|'mx'|'my'|'ng'|'nl'|'no'|'nz'|'ph'|'pl'|'pt'|'ro'|'rs'|'ru'|'sa'|'se'|'sg'|'si'|'sk'|'th'|'tr'|'tw'|'ua'|'us'|'ve'|'za';
    category?: 'business'|'entertainment'|'general'|'health'|'science'|'sports'|'technology';
    sources?: string;
    q?: string;
    pageSize?: number;
    page?: number;
};

type everythingParams = {
    q?: string;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: 'ar'|'de'|'en'|'es'|'fr'|'he'|'it'|'nl'|'no'|'pt'|'ru'|'se'|'ud'|'zh';
    sortBy?: 'relevancy'|'popularity'|'publishedAt';
    pageSize?: number;
    page?: number;
};

type sourcesParams = {
    category?: 'business'|'entertainment'|'general'|'health'|'science'|'sports'|'technology';
    language?: 'ar'|'de'|'en'|'es'|'fr'|'he'|'it'|'nl'|'no'|'pt'|'ru'|'se'|'ud'|'zh';
    country?: 'ae'|'ar'|'at'|'au'|'be'|'bg'|'br'|'ca'|'ch'|'cn'|'co'|'cu'|'cz'|'de'|'eg'|'fr'|'gb'|'gr'|'hk'|'hu'|'id'|'ie'|'il'|'in'|'it'|'jp'|'kr'|'lt'|'lv'|'ma'|'mx'|'my'|'ng'|'nl'|'no'|'nz'|'ph'|'pl'|'pt'|'ro'|'rs'|'ru'|'sa'|'se'|'sg'|'si'|'sk'|'th'|'tr'|'tw'|'ua'|'us'|'ve'|'za';
};

type Article = {
    id: string;
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
};

interface Model<State> {
    namespace: string;
    state: State;
    reducers: {
        [propName: string]: (state: State, payload: any) => State;
    };
    effects?: {
        [propName: string]: (...args: any) => any;
    };
    subscriptions?: {
        [propName: string]: (...args: any) => any;
    };
}