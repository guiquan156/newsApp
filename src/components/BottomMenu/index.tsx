import React from 'react';
import Link from 'umi/link';
import styles from './BottomMenu.css';

export default class BottomMenu extends React.Component {
    render () {
        return (
            <nav className={styles.menu}>
                <Link to="/" className={styles.menuItem}>
                    <span className="iconfont icon-home"></span>
                </Link>
                <Link to="/user" className={styles.menuItem}>
                    <span className="iconfont icon-user"></span>
                </Link>
            </nav>
        );
    }
}