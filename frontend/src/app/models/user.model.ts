export interface RegisterUserData {
  [key: string]: any,
  displayName: string,
  email: string,
  avatar: File | null,
  password: string,
}

export interface User {
  _id: string,
  displayName: string,
  email: string,
  avatar: string,
  token: string,
}

export interface FieldError {
  message: string,
}

export interface RegisterError {
  errors: {
    password: FieldError,
    email: FieldError,
  };
}