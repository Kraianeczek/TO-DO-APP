import { createStore } from 'redux';
import initialState from './InitialState';
import shortid from 'shortid';
import changer from '../utils/strContain';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && changer(card.title, searchString));

export const getAllColumns = () => {return initialState.columns};

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)

export const getColumnsByList = ({ columns }, listId=1) => columns.filter(column => column.listId === listId)

export const getAllLists = () => {return initialState.lists}


// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload});

export const searchString = payload => ({ type: 'FILTER', payload });


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
          return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
        case 'ADD_CARD': 
          return { ...state, cards: [...state.cards, { ...action.payload}] };
        case 'FILTER':
          return { ...state, searchString: action.payload.title };
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