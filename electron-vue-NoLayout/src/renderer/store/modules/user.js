const user = {
  state: {
    token: 'admin',
    name: 'Super Admin',
    avatar: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      localStorage.setItem('token', JSON.stringify(token))
      state.token = token
    },
    SET_NAME: (state, name) => {
      localStorage.setItem('name', JSON.stringify(name))
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      localStorage.setItem('avatar', JSON.stringify(avatar))
      state.avatar = avatar
    }
  },

  actions: {
    // 登录
    Login ({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        console.log('这是传过来的登录信息', data)
        commit('SET_TOKEN', 'admin')
        commit('SET_NAME', 'Admin')
        resolve()
      })
    },

    // 登出
    LogOut ({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        resolve()
      })
    },

    // 前端 登出
    FedLogOut ({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        resolve()
      })
    }
  }
}

export default user
