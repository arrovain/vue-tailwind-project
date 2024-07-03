export type User = {
    __v: number,
    _id: string,
    avatar: Image,
    createdAt: string,
    email: string,
    isEmailVerified: boolean,
    // loginType: EMAIL_PASSWORD,
    role: 'ADMIN' | 'USER',
    updatedAt: string,
    username: string
}