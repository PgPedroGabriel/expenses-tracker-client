const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          tran => tran.id !== action.payload,
        ),
      };
    case 'ADD_TRANSACTION':
      state.transactions.push(action.payload);
      return { ...state };
    default:
      return state;
  }
};

export default AppReducer;
