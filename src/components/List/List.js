import Column from '../Column/Column.js';
import styles from './List.module.scss'
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store.js';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm.js';
import { Navigate } from 'react-router-dom';

const List = () => {

    const { listId } = useParams();
    const listData = useSelector(state => getListById(state, listId));
	const columns = useSelector(state => getColumnsByList(state, listId));
    console.log('list', listData);

    if(!listData) return <Navigate to="/" />
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>{listData.title}<span>soon</span></h1>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm listId={listId}/>
        </div>
    )
};

export default List;