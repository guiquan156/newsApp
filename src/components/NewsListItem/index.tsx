import React from 'react';
import Link from 'umi/link';
import styles from './NewsListItem.css';

export interface NewsListItemProps extends React.Props<any> {
    article: Article;
}

export default class NewsListItem extends React.Component<NewsListItemProps> {

    formatTime (timeStr) {
        const date = new Date(timeStr);
        const now = new Date();

        const addZero = (n: number): string => n <= 9 ? '0' + n : '' + n;

        const y: string = '' + date.getFullYear();
        const m: string = addZero(date.getMonth());
        const d: string = addZero(date.getDate());

        const ny: string = '' + now.getFullYear();
        const nm: string = addZero(now.getMonth());
        const nd: string = addZero(now.getDate());

        const ymd:string = [y, m, d].join('-');
        const nymd: string = [ny, nm, nd].join('-');

        if ( nymd === ymd ) {
            return [
                addZero(now.getHours()),
                addZero(now.getMinutes())
            ].join(':');
        } else {
            return ymd;
        }
    }

    render () {
        const { article } = this.props;
        return (
            <article className={styles.card}>
                <Link to={`/detail/${article.id}`}>
                    <div className={styles.info}>
                        <h3 className={styles.title}>{article.title}</h3>
                        <div className={styles.detail}>
                            <span className={styles.source}>{article.source.name}</span>
                            <span className={styles.pubtime}>{this.formatTime(article.publishedAt)}</span>
                        </div>
                    </div>
                    <div className={styles.pic}>
                        <img src={article.urlToImage} alt="" />
                    </div>
                </Link>
            </article>
        );
    }
}
