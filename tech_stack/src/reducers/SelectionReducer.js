export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      console.log('SelectionReducer!!');
      return action.payload;
    default:
      return state;
  }
};
