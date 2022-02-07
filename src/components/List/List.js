import Column from '../Column/Column.js';
import styles from './List.module.scss'
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById } from '../../redux/store.js';

const List = () => {

    const listData = useSelector(state => getListById(state, 1));
	const columns = useSelector(getAllColumns);
    console.log('list', listData)

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>{listData.title}<span>soon</span></h1>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm />
        </div>
    )
};

export default List;