import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <container className={styles.container}>
            <span>
                <h3 className={styles.span}><span className="fa fa-tasks"></span></h3> 
            </span> 
            <span>
                <h3 className={styles.home}><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/">Home</NavLink></h3>
                <h3 className={styles.favorite}><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/favorite">Favorite</NavLink></h3>
                <h3 className={styles.about}><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/about">About</NavLink></h3>
            </span>
        </container>
    )
}

export default NavBar;