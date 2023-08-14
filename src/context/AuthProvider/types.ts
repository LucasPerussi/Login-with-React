export interface IUser{
    // ? significa que não é obrigatório existir
    email?: string;
    token?: string;
}

export interface IContext extends IUser{
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}