import { writable } from 'svelte/store'
import {firebase} from '../firebase'

const createUser = () => {
    const { subscribe, set } = writable(false)

    return {
        subscribe,
        setUser: (user) => {
            set(user)
        },
        current: async () => {
            const user = await firebase.getCurrentUser()
            set(user)
        }
    }
}

export const user = createUser()