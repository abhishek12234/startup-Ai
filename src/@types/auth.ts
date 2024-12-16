export type SignInCredential = {
    email: string
    password: string
}

export type SignInResponse = {
    token: string
    user: {
        userName?: string
        authority?: string[]
        avatar?: string
        email: string
        first_name:string,
        last_name:string,
        age:number,
        profession:string

    }
}

export type SignUpResponse = SignInResponse

export type SignUpCredential = {
    first_name:string,
    last_name:string,
    age:number,
    profession:string
    email: string
    phone:number
    password: string
}

export type ForgotPassword = {
    email: string
}

export type ResetPassword = {
    password: string
}
