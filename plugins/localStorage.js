import createPersistedState from 'vuex-persistedstate'

export default ({
  store
}) => {
  createPersistedState({
    key: 'moneyline',
  })(store)
}
