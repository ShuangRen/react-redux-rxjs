export default (state = 0, type) => {
  switch (type) {
    case 'INCREMENT':
    console.log('INCREMENT')
      return state + 1;
    case 'DECREMENT':
      console.log('DECREMENT')
      return state - 1;
    default:
      return state;
  }
}
