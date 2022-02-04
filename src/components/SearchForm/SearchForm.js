import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import styles from './SearchForm.module.scss'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        console.log('asd');
        dispatch({ type: 'FILTER', payload: { title: title}});
        setTitle('');
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." type="text" value={title} onChange={ e => setTitle(e.target.value) }/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;   