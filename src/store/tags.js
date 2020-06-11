export default {
    state: {
        tags: []
    },
    mutations: {
        newTag (state, payload){
            state.tags.push(payload)
        }
    },
    actions: {
        newTag ({commit}, payload){
            commit('newTag', payload)
        }
    },
    getters: {
        tags (state) {
            return state.tags
        }
    }
}