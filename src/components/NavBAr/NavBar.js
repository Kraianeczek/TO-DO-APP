import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <span>
                <h3 className={styles.h3}><span  className={'fa fa-tasks'}></span></h3>
            </span>
            <span>
                <h3 className={styles.h3}><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/">Home</NavLink></h3>
                <h3 className={styles.h3}><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/favorite">Favorite</NavLink></h3>
                <h3 className={styles.h3}><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/about">About</NavLink></h3>
            </span>
        </div>
    )
}

export default NavBar;