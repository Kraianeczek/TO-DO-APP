import Column from '../Column/Column.js';
import styles from './List.module.scss'
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById } from '../../redux/store.js';

const List = (props) => {

	const columns = useSelector(getAllColumns);
    const listData = useSelector(state => getListById(state, props.id));
    console.log('list', listData)

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do <span>soon</span></h1>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm />
        </div>
    )
};

export default List;