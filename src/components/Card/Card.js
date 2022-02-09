import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux.js';
import styles from './Card.module.scss';

const Card = props => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault(); 
        dispatch(toggleCardFavorite(props.id))
    }

    const trashSubmit = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    }

    const classFavorite = (props.isFavorite ? styles.isFavorite : styles.isNotFavorite)
    const klass = (props.isFavorite ? 'fa-star' : 'fa-star-o')

    return (
        <div className={styles.card}>
            <li className={styles.title}>{props.title}
            <div>
                <button className={styles.button} onClick={handleSubmit}>
                    <span className={styles.icon + ' fa ' + klass + ' ' + classFavorite}></span>
                </button>
                <button className={styles.button} onClick={trashSubmit}>
                    <span className={styles.trash + ' fa fa-trash '}></span>
                </button>
            </div>
            </li>
        </div>
    );
};

export default Card;