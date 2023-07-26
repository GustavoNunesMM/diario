import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: "Gustavo",
    Class: [1001,1002,1003,1004,1005,2001,2002,2003,2004,3001,3002,3003],
    year: ['1', '2', '3'],
    bimestre: [1,2,3,4],
    filterList : {
      Class: '',
      year: '',
      bimester: ''
      },
    date: '',
  },
  getters: {
    fClass: state => {
      return state.Class.filter(el => `${el}`.slice(0,1) == state.filterList.year)
    }
  },
  mutations: {
    classChoice (state, payload) {
      state.filterList.Class = payload
    },
    yearChoice (state, payload) {
      state.filterList.year = payload
    },
    dateChange (state, payload) {
      state.date = payload
    },
    classAdd (state,payload) {
      state.Class.push(payload)
    },
    yearAdd (state,payload) {
      state.year.push(payload)
    },
    bimesterChoice (state,payload) {
      state.filterList.bimester = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
