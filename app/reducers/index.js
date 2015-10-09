export function local(state, action) {
  switch (action.type) {
  case 'WHAT':
    return action.payload;
  default:
    return state || {};
  }
}
