import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <span>
                <h3 className={styles.h3}><span  className={'fa fa-tasks'}></span></h3>
            </span>
            <span>
                <h3 className={styles.h3}><a href='/'>Home</a></h3>
                <h3 className={styles.h3}><Link to='/favorite'>Favorite</Link></h3>
                <h3 className={styles.h3}><Link to='/about'>About</Link></h3>
            </span>
        </div>
    )
}

export default NavBar;