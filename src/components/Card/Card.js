import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';

const Card = props => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault(); 
        dispatch(toggleCardFavorite(props.id))
    }

    const classFavorite = (props.isFavorite ? styles.isFavorite : styles.isNotFavorite)
    const klass = (props.isFavorite ? 'fa-star' : 'fa-star-o')

    return (
        <div className={styles.card}>
            <li className={styles.title}>{props.title}
                <button className={styles.button} onClick={handleSubmit}>
                    <span className={styles.icon + ' fa ' + klass + ' ' + classFavorite}></span>
                </button>
            </li>
        </div>
    );
};

export default Card;