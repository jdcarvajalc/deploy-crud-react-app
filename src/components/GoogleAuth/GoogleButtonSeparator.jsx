import styles from './GoogleButtonSeparator.module.css';

const GoogleButtonSeparator = () => {
    return ( 
        <div className={styles.orSeparator}>
            <span className={styles.orLeftLine}></span>
            <span className={styles.orText}>OR</span>
            <span className={styles.orRightLine}></span>
        </div>
    );
}
 
export default GoogleButtonSeparator;