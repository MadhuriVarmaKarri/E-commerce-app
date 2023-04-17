export interface SignUp {
    username: string;
    email: string;
    password: string | number;
}

export interface Login {
    identifier: string;
    password: string | number;
}

