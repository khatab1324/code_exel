export interface User {
  id: number;
  username: string;
  email: string;
  phoneNumber: string;
  role: string;
  isActive: boolean;
  createdAt: Date;
}
