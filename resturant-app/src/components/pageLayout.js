import React from 'react';
import styles from "./pageLayout.module.css";

const PageLayout = ({children}) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

export default PageLayout;