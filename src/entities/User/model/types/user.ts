export interface User {
  id: number
  username: string
}

export interface UserSchema {
  getAuth?: User
}
