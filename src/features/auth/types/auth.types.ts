export interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    email_verified: boolean;
  }
  
  export interface AuthTokens {
    access: string;
    refresh: string;
  }
  
  export interface LoginResponse extends AuthTokens {
    user: User;
  }