import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import styles from './SearchForm.module.scss'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'FILTER', payload: { title: title }})
        setTitle('');
    }

    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." value={title} type="text" onChange={e => setTitle(e.target.value)} />
            <Button onClick={handleSubmit} >
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;