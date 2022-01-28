import { createStore } from 'redux';
import initialState from './InitialState';
import shortid from 'shortid';
import changer from '../utils/strContain';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && changer(card.title, searchString) );


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