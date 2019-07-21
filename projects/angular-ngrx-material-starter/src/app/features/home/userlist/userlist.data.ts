export interface User {
  userId?: number;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  description?: string;
  department: string;
  team?: string;
}
