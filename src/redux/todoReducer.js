let initialState = [{ id: 1, title: "Todo-1", complete: true },{ id: 2, title: "Todo-2", complete: false }];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "Add": {
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          complete: action.payload.complete,
        },
      ];
    }
    case "Delete": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    default :
        return state
  }
}

export default todoReducer;
