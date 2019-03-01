import React from 'react';
import { connect } from 'dva';
import { findWhere } from 'underscore';
import styles from './detail.css';

type Props = {
    articles: Array<Article>;
    match: {
        params: {
            id: number;
        };
    };
};

type State = {}


class Detail extends React.Component<Props, State> {


    formatContent (content) {
        return content.replace(/\[\+.*\]/, '');
    }


    render () {
        const { articles } = this.props;
        const { id } = this.props.match.params;
        const item:Article = findWhere(articles, {id});

        if (!item) {
            return (
                <p>Error</p>
            );
        }

        return (
            <article>
                <div className={styles.head}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <div className={styles.info}>
                        <span className={styles.time}>{item.publishedAt}</span>
                        <span className={styles.source}>{item.source.name}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <img className={styles.photo} src={item.urlToImage} alt=""/>
                    <p>{this.formatContent(item.content || item.description)}</p>

                    <a href={item.url} className={styles.more} target="_blank">read more</a>
                </div>
            </article>
        );
    }
}

function mapStateToProps(state) {
    const { articles } = state.topHeadlines;
    return { articles };
}

export default connect(mapStateToProps)(Detail);

