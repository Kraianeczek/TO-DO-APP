
const createActionName = actionName => `app/lists/${actionName}`;
const FILTER = createActionName('FILTER');

// action creators
export const filter = payload => ({ type: FILTER, payload });

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case FILTER:
        return action.payload.title
      default:
        return statePart;
    }
  }

  export default searchStringReducer;