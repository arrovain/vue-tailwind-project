export interface APIResponse<T> {
    message: string,
    statusCode: number,
    success: boolean,
    data: T
}

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

export type Image = {
    localPath: string,
    url: string,
    _id: string

}

export type Category = {
    __v: number,
    _id: string,
    updatedAt: string,
    createdAt: string,
    owner: string
    name: string


}