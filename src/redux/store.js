import { createStore } from 'redux';
import shortid from 'shortid';
import strContain from '../utils/strContain';
import initialState from './initialState';

//selectors
export const getFilteredCards = ({cards, searchString}, columnId) => cards
  .filter(card => card.columnId === columnId && strContain(card.title, searchString));
export const getAllColumns = (state => state.columns);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case'ADD_COLUMN': return { ...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
    case'ADD_CARD': return { ...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
    case 'FILTER': return { ...state, searchString: action.payload.title};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;