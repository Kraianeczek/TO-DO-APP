import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss'

const Column = (props) => {

    const searchString = useSelector(state => state.searchString);
    console.log('ss', searchString);
    const cards = useSelector(state => state.cards).filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase()))

    return (
        <article className={styles.column}>
            <h1 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h1>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    )
}

export default Column;