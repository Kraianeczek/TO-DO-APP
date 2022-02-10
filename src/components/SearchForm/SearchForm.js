import { useEffect, useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import styles from './SearchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/searchStringRedux.js';

const SearchForm = () => {

    const searchString = useSelector(state => state.searchString);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log('titsss', title)
        dispatch(filter({title}));
        console.log('tit', title);
        setTitle(title);
    };

    useEffect(() => {
        setTitle(searchString)
    }, [searchString])

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={title} onChange={e => setTitle(e.target.value)}></TextInput>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;