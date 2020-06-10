export default {
    state: {
        tasks: [
            {
                'id': 1,
                'time': '2 hours 10 minutes',
                'title': 'Harry Potter & cursed child',
                'description': 'This description is so cool in my opinion',
                'whatWatch': 'Film',
                'completed': false,
                'editing': false
            },
            {
                'id': 2,
                'title': 'Hack',
                'time': '1 hours 57 minutes',
                'description': 'I dont know what i need to write at this description',
                'whatWatch': 'Film',
                'completed': true,
                'editing': false
            },
            {
                'id': 3,
                'title': 'Game of Thrones',
                'time': '98 hours 56 minutes',
                'description': 'So many seasons',
                'whatWatch': 'Serial',
                'completed': false,
                'editing': false
            }
        ]
    },
    mutations: {
        newTask (state, payload) {
            state.tasks.push(payload)
        }
    },
    actions: {
        newTask ({commit}, payload) {
            payload.id = Math.random()
            commit('newTask', payload)
        }
    },
    getters: {
        tasks (state) {
            return state.tasks
        },
        taskCompleted (state){
            return state.tasks.filter(task => {
                return task.completed
            })
        },
        taskNotCompleted (state){
            return state.tasks.filter(task => {
                return task.completed === false
            })
        }
    }
}