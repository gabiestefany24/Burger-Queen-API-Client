export interface User {
    id: number;
    email: string;
    password: string;
    role: string;
  }

export interface NewProduct{
  name: string,
  price: string,
  type: string,
  image: string,
}

export interface NewUser{
  email: string;
  password: string;
  role: string;
}