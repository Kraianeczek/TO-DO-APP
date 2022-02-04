import { useState } from 'react/cjs/react.development';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss'
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const CardForm = props => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: {title: title , columnId: props.columnId }});
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onClick={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add Card</Button>
        </form>
    );
};

export default CardForm;