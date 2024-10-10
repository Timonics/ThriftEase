export interface UserAttribute {
  id: number;
  name: string;
  email: string;
  password: string;
  passwordHash: string;
}

export type NewUser = {
    id: number,
    name: string;
    email: string;
    password: string;
    passwordHash: string;
}
