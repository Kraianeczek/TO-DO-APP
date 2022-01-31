import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <span>
                <h3 className={styles.h3}><span  className={'fa fa-tasks'}></span></h3>
            </span>
            <span>
                <h3 className={styles.h3}>Home</h3>
                <h3 className={styles.h3}>Favorite</h3>
                <h3 className={styles.h3}>About</h3>
            </span>
        </div>
    )
}

export default NavBar;