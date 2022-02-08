import styles from './Card.module.scss'

const Card = props => {
    return (
        <div className={styles.card}>
            <li className={styles.title}>{props.title}
                <button className={styles.button}>
                    <span className={styles.icon + ' fa fa-star-o'}></span>
                </button>
            </li>
        </div>
    );
};

export default Card;