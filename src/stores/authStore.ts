
import { defineStore } from 'pinia'
import axios from '@/plugins/axios'

export const useAuthStore = defineStore('AuthStore', {
    state: () => ({
        user: getLocalStorageData<User | null>('currentUserContent', true)
    }),

    actions: {
        async RegisterUser(from: Record<string, any>) {
            
        }
    },
})
