export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      console.log('ConsoleReducer!!');
      return action.payload;
    default:
      return state;
  }
};
