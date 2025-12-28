// Common types for the application

export interface Company {
  _id: string;
  name: string;
  description: string;
  mission?: string;
  vision?: string;
  founded?: string;
  employees?: number;
  address?: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  country: string;
  zipCode?: string;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
  price?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  _id: string;
  name: string;
  position: string;
  bio?: string;
  avatar: string;
  email?: string;
  phone?: string;
  socialLinks?: SocialLinks;
  skills: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactInfo {
  _id: string;
  email: string;
  phone: string;
  address: string;
  workingHours?: string;
  socialLinks?: SocialLinks;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  facebook?: string;
}
