import { writable } from 'svelte/store'

const createUser = () => {
    const { subscribe, set } = writable(null)

    return {
        subscribe,
        setUser: (user) => {
            set(user)
        }
    }
}

export const user = createUser()