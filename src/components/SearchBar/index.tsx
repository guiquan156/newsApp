import React from 'react';
import Link from 'umi/link';
import styles from './SearchBar.css';

export default class SearchBar extends React.Component {

    search = () => {

    }

    render () {
        return (
            <div className={styles.bar}>
                <Link to="/" className={styles.logo}>
                    <i className="iconfont icon-xinwen"></i>
                </Link>
                <div className={styles.input}>
                    <input type="text"/>
                    <div className={styles.searchBtn} onClick={this.search}>
                        <i className="iconfont icon-search"></i>
                    </div>
                </div>
                <div className={styles.location}>
                    <i className="iconfont icon-location"></i>
                </div>
            </div>
        );
    }
}