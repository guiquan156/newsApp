
import * as services from '../services';
import { uniqueId } from 'underscore';

type topHeadlinesState = {
    articles: Array<Article>;
    pageIndex: number;
};

interface topHeadlinesModel extends Model<topHeadlinesState> {
    state: topHeadlinesState
};

const model: topHeadlinesModel = {
    namespace: 'topHeadlines',
    state: {
        articles: [],
        pageIndex: 1
    },
    reducers: {
        reload (state, { articles }) {
            articles = articles.map((item: Article) => {
                item.id = uniqueId();
                return item;
            });
            return { ...state, articles };
        },
        add (state, { articles }) {
            articles = articles.map((item: Article) => {
                item.id = uniqueId();
                return item;
            });
            const newArticles = state.articles.concat(articles);
            return { ...state, articles: newArticles };
        },
        addPage (state) {
            return { ...state, pageIndex: state.pageIndex++ };
        }
    },
    effects: {
        *fetch (action, {call, put}) {
            const data = yield call(services.topHeadlines, {
                category: 'sports',
                country: 'us',
                pageSize: 50
            });

            yield put({
                type: 'reload',
                articles: data.articles
            });
        },

        *nextPage (action, {call, put}) {
            const data = yield call(services.topHeadlines, {
                category: 'sports',
                country: 'us',
                pageSize: 50
            });
            put({ type: 'addPage', articles: data.articles });
            put({ type: 'add' });
        }
    },
    subscriptions: {

    }
};

export default model;