import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <container className={styles.container}>
            <span>
                <h3 className={styles.span}><span className="fa fa-tasks"></span></h3> 
            </span> 
            <span>
                <h3 className={styles.home}><Link to="/">Home</Link></h3>
                <h3 className={styles.favorite}><Link to="/favorite">Favorite</Link></h3>
                <h3 className={styles.about}><Link to="/about">About</Link></h3>
            </span>
        </container>
    )
}

export default NavBar;