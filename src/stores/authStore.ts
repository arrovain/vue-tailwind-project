
import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
import { APIResponse, User } from '@/types/index'

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
            async loginUser(form: Record<string, string>) {

                return new Promise<User>(async (resolve, reject) => {
    
                    try {
    
                        const { data } = await axios.post<APIResponse<{ user: User, accessToken: string, refreshToken: string }>>('/users/login', {
                            ...form
                        });
    
                        this.user = data.data.user
                        console.log('LOGIN', data.data);
                        localStorage.setItem("currentUserContent", JSON.stringify(data.data.user));
                        localStorage.setItem("currentAuthTokens", JSON.stringify({
                            accessToken: data.data.accessToken,
                            refreshToken: data.data.refreshToken,
    
                        }));
    
    
                        resolve(data.data.user)
                    } catch (error) {
                        reject(error)
                    }
    
                })
    
           

        },

        
    },
})
