export interface Service {
  _id: string
  name: string
  price: number
}

export interface RegisterData {
  name: string
  email: string
  password: string
  password_confirm: string
}

export interface User {
  email: string
  firstName: string
  lastName: string
  password: string
  verified: boolean
  _id: string
  verificationCode: string
}

export interface RegisterResponse {
  data: User
  success: boolean
  message: string
}
