export interface IRegister{
    first_name: String,
    email: String,
    password: String
}
export interface ILogin{
    username: String,
    password: String,
}

export type Jwt = { token: string } | null;
