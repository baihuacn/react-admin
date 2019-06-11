export default {
  namespace: 'account',
  state: {},
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
