const INITIAL_STATE = {
  mobile: '',
  id: '',
  integral: 0,
  name: '',
  role: '',
  hasContract: false,
  amount: 0
};
export default function login(state = INITIAL_STATE, action) {
  if (action.type) {
    switch (action.type) {
      default:
        return state;
    }
  }
  return state;
}