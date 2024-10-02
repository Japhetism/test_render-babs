export interface ILogin {
    username: string
    password: string
}

export interface ILoginResponse {
    statusCode: number
    message: string
    hasError: boolean
    data: {
        emailAddress: string
        password: string
        fullName: string
        accessToken: string
        refreshToken: string
        otp: string
        id: string
    }
}

export interface IOtp {
    otp: string
    email: string
}