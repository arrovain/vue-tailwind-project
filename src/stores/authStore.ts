
import { defineStore } from 'pinia'
import axios from '@/plugins/axios'

export const useAuthStore = defineStore('AuthStore', {
    state: () => ({
        user: getLocalStorageData<User | null>('currentUserContent', true)
    }),

    actions: {
        async RegisterUser(from: Record<string, any>) {
            return new Promise<User>(async (resolve, reject) => {

                try {

                    const { data } = await axios.post<APIResponse<{ user: User }>>('/users/register', {
                        ...form
                    });
                    console.log('REGISTER', data.data);


                    resolve(data.data.user)
                } catch (error) {
                    reject(error)
                }

            })

        },

        
    },
})
