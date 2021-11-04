import {
  ALL_USERS
} from '../utils/api-routes';

export const store = () => ({
  users: [],
  responseData: null,
  formDataProgress: []
});

export const mutations = {
  loadUsers(state, payload) {
    state.users = payload
  },
  additionals(state, payload) {
    state.responseData = payload
  },
  loanFormProgress(state, payload) {
    state.formDataProgress = payload
  }
};

export const actions = {
  fetchUsers({
    commit
  }, payload) {
    commit('loadUsers', payload);
  },
  fetchLoanFormProgress({
               commit
             }, payload) {
    commit('loanFormProgress', payload);
  }
};

export const getters = {
  getUsers: state => {
    return state.users
  }
}
