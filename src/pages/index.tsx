import React from 'react';
import { connect } from 'dva';
import styles from './index.css';

import NewsListItem from '../components/NewsListItem';
import BottomMenu from '../components/BottomMenu';
import SearchBar from '../components/SearchBar';

export interface Props {
    dispatch: (...arg: any) => any;
    articles: Array<Article>;
};

export interface State {
    articles: Array<Article>;
}

class Index extends React.Component<Props, State> {

    constructor (props: any) {
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentWillMount () {
        const { dispatch } = this.props;
        dispatch({type: 'topHeadlines/fetch'});
    }

    render () {
        const { articles } = this.props;
        return (
            <>
                <SearchBar />
                <div className={styles.newsList}>
                    {articles.map((item, index) => (<NewsListItem article={item} key={index}/>))}
                </div>
                <BottomMenu />
            </>
        );
    }
}

function mapStateToProps(state) {
    const { articles } = state.topHeadlines;
    return { articles };
}

export default connect(mapStateToProps)(Index);
