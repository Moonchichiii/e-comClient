export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  email_verified: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  password_confirm: string
  first_name: string
  last_name: string
}

export interface AuthResponse {
  access: string
  refresh: string
  user: User
}