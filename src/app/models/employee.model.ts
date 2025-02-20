export class Employee {
  id!: number;//Non-nullable property
  name!: string;
  gender!: string;
  email?: string; //Optional property
  phoneNumber?: number;
  contactPreference!: string;
  dateOfBirth!: Date;
  department!: string;
  isActive!: boolean;
  photoPath?: string;
}
