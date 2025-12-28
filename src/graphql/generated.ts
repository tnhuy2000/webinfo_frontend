/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */
/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  street: Scalars['String']['output'];
  zipCode: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  street: Scalars['String']['input'];
  zipCode: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  _id: Scalars['ID']['output'];
  address: Maybe<Address>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Maybe<Scalars['Float']['output']>;
  deletedBy: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  employees: Maybe<Scalars['Int']['output']>;
  founded: Maybe<Scalars['String']['output']>;
  mission: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vision: Maybe<Scalars['String']['output']>;
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  _id: Scalars['ID']['output'];
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  socialLinks: Maybe<SocialLinks>;
  updatedAt: Scalars['DateTime']['output'];
  workingHours: Maybe<Scalars['String']['output']>;
};

export type ContactMessage = {
  __typename?: 'ContactMessage';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  isRead: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
};

export type CreateCompanyInput = {
  address: InputMaybe<AddressInput>;
  description: Scalars['String']['input'];
  employees: InputMaybe<Scalars['Int']['input']>;
  founded: InputMaybe<Scalars['String']['input']>;
  mission: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  vision: InputMaybe<Scalars['String']['input']>;
};

export type CreateContactMessageInput = {
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
};

export type CreateServiceInput = {
  description: Scalars['String']['input'];
  features: InputMaybe<Array<Scalars['String']['input']>>;
  icon: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  price: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateTeamMemberInput = {
  avatar: Scalars['String']['input'];
  bio: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  phone: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  skills: InputMaybe<Array<Scalars['String']['input']>>;
  socialLinks: InputMaybe<SocialLinksInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty: Maybe<Scalars['String']['output']>;
  createCompany: Company;
  createContactMessage: ContactMessage;
  createService: Service;
  createTeamMember: TeamMember;
  markAsRead: ContactMessage;
  removeCompany: Scalars['Boolean']['output'];
  removeService: Scalars['Boolean']['output'];
  removeTeamMember: Scalars['Boolean']['output'];
  updateCompany: Company;
  updateContactInfo: ContactInfo;
  updateService: Service;
  updateTeamMember: TeamMember;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationCreateContactMessageArgs = {
  input: CreateContactMessageInput;
};


export type MutationCreateServiceArgs = {
  input: CreateServiceInput;
};


export type MutationCreateTeamMemberArgs = {
  input: CreateTeamMemberInput;
};


export type MutationMarkAsReadArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveServiceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveTeamMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCompanyArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCompanyInput;
};


export type MutationUpdateContactInfoArgs = {
  input: UpdateContactInfoInput;
};


export type MutationUpdateServiceArgs = {
  id: Scalars['ID']['input'];
  input: UpdateServiceInput;
};


export type MutationUpdateTeamMemberArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTeamMemberInput;
};

export type Query = {
  __typename?: 'Query';
  _empty: Maybe<Scalars['String']['output']>;
  companies: Array<Company>;
  company: Company;
  contactInfo: ContactInfo;
  contactMessage: ContactMessage;
  contactMessages: Array<ContactMessage>;
  service: Service;
  services: Array<Service>;
  teamMember: TeamMember;
  teamMembers: Array<TeamMember>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServicesArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTeamMemberArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeamMembersArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
};

export type Service = {
  __typename?: 'Service';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  features: Array<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  price: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SocialLinks = {
  __typename?: 'SocialLinks';
  facebook: Maybe<Scalars['String']['output']>;
  github: Maybe<Scalars['String']['output']>;
  linkedin: Maybe<Scalars['String']['output']>;
  twitter: Maybe<Scalars['String']['output']>;
};

export type SocialLinksInput = {
  facebook: InputMaybe<Scalars['String']['input']>;
  github: InputMaybe<Scalars['String']['input']>;
  linkedin: InputMaybe<Scalars['String']['input']>;
  twitter: InputMaybe<Scalars['String']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  _id: Scalars['ID']['output'];
  avatar: Scalars['String']['output'];
  bio: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone: Maybe<Scalars['String']['output']>;
  position: Scalars['String']['output'];
  skills: Array<Scalars['String']['output']>;
  socialLinks: Maybe<SocialLinks>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateCompanyInput = {
  address: InputMaybe<AddressInput>;
  description: InputMaybe<Scalars['String']['input']>;
  employees: InputMaybe<Scalars['Int']['input']>;
  founded: InputMaybe<Scalars['String']['input']>;
  mission: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  vision: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContactInfoInput = {
  address: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  socialLinks: InputMaybe<SocialLinksInput>;
  workingHours: InputMaybe<Scalars['String']['input']>;
};

export type UpdateServiceInput = {
  description: InputMaybe<Scalars['String']['input']>;
  features: InputMaybe<Array<Scalars['String']['input']>>;
  icon: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  price: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamMemberInput = {
  avatar: InputMaybe<Scalars['String']['input']>;
  bio: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  skills: InputMaybe<Array<Scalars['String']['input']>>;
  socialLinks: InputMaybe<SocialLinksInput>;
};

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'Company', _id: string, name: string, description: string, mission: string | null, vision: string | null, founded: string | null, employees: number | null, createdAt: any, updatedAt: any, address: { __typename?: 'Address', street: string, city: string, country: string, zipCode: string | null } | null } };

export type UpdateCompanyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateCompanyInput;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany: { __typename?: 'Company', _id: string, name: string, description: string, mission: string | null, vision: string | null, founded: string | null, employees: number | null, createdAt: any, updatedAt: any, address: { __typename?: 'Address', street: string, city: string, country: string, zipCode: string | null } | null } };

export type RemoveCompanyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveCompanyMutation = { __typename?: 'Mutation', removeCompany: boolean };

export type CreateServiceMutationVariables = Exact<{
  input: CreateServiceInput;
}>;


export type CreateServiceMutation = { __typename?: 'Mutation', createService: { __typename?: 'Service', _id: string, title: string, description: string, icon: string | null, features: Array<string>, price: string | null, isActive: boolean, createdAt: any, updatedAt: any } };

export type UpdateServiceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateServiceInput;
}>;


export type UpdateServiceMutation = { __typename?: 'Mutation', updateService: { __typename?: 'Service', _id: string, title: string, description: string, icon: string | null, features: Array<string>, price: string | null, isActive: boolean, createdAt: any, updatedAt: any } };

export type RemoveServiceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveServiceMutation = { __typename?: 'Mutation', removeService: boolean };

export type CreateTeamMemberMutationVariables = Exact<{
  input: CreateTeamMemberInput;
}>;


export type CreateTeamMemberMutation = { __typename?: 'Mutation', createTeamMember: { __typename?: 'TeamMember', _id: string, name: string, position: string, bio: string | null, avatar: string, email: string | null, phone: string | null, skills: Array<string>, isActive: boolean, createdAt: any, updatedAt: any, socialLinks: { __typename?: 'SocialLinks', linkedin: string | null, twitter: string | null, github: string | null, facebook: string | null } | null } };

export type UpdateTeamMemberMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateTeamMemberInput;
}>;


export type UpdateTeamMemberMutation = { __typename?: 'Mutation', updateTeamMember: { __typename?: 'TeamMember', _id: string, name: string, position: string, bio: string | null, avatar: string, email: string | null, phone: string | null, skills: Array<string>, isActive: boolean, createdAt: any, updatedAt: any, socialLinks: { __typename?: 'SocialLinks', linkedin: string | null, twitter: string | null, github: string | null, facebook: string | null } | null } };

export type RemoveTeamMemberMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveTeamMemberMutation = { __typename?: 'Mutation', removeTeamMember: boolean };

export type CreateContactMessageMutationVariables = Exact<{
  input: CreateContactMessageInput;
}>;


export type CreateContactMessageMutation = { __typename?: 'Mutation', createContactMessage: { __typename?: 'ContactMessage', _id: string, name: string, email: string, phone: string | null, subject: string, message: string, isRead: boolean, createdAt: any } };

export type MarkAsReadMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type MarkAsReadMutation = { __typename?: 'Mutation', markAsRead: { __typename?: 'ContactMessage', _id: string, name: string, email: string, phone: string | null, subject: string, message: string, isRead: boolean, createdAt: any } };

export type UpdateContactInfoMutationVariables = Exact<{
  input: UpdateContactInfoInput;
}>;


export type UpdateContactInfoMutation = { __typename?: 'Mutation', updateContactInfo: { __typename?: 'ContactInfo', _id: string, email: string, phone: string, address: string, workingHours: string | null, createdAt: any, updatedAt: any, socialLinks: { __typename?: 'SocialLinks', linkedin: string | null, twitter: string | null, github: string | null, facebook: string | null } | null } };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', _id: string, name: string, description: string, mission: string | null, vision: string | null, founded: string | null, employees: number | null, createdAt: any, updatedAt: any, address: { __typename?: 'Address', street: string, city: string, country: string, zipCode: string | null } | null }> };

export type GetCompanyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCompanyQuery = { __typename?: 'Query', company: { __typename?: 'Company', _id: string, name: string, description: string, mission: string | null, vision: string | null, founded: string | null, employees: number | null, createdAt: any, updatedAt: any, address: { __typename?: 'Address', street: string, city: string, country: string, zipCode: string | null } | null } };

export type GetServicesQueryVariables = Exact<{
  isActive: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetServicesQuery = { __typename?: 'Query', services: Array<{ __typename?: 'Service', _id: string, title: string, description: string, icon: string | null, features: Array<string>, price: string | null, isActive: boolean, createdAt: any, updatedAt: any }> };

export type GetServiceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetServiceQuery = { __typename?: 'Query', service: { __typename?: 'Service', _id: string, title: string, description: string, icon: string | null, features: Array<string>, price: string | null, isActive: boolean, createdAt: any, updatedAt: any } };

export type GetTeamMembersQueryVariables = Exact<{
  isActive: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetTeamMembersQuery = { __typename?: 'Query', teamMembers: Array<{ __typename?: 'TeamMember', _id: string, name: string, position: string, bio: string | null, avatar: string, email: string | null, phone: string | null, skills: Array<string>, isActive: boolean, createdAt: any, updatedAt: any, socialLinks: { __typename?: 'SocialLinks', linkedin: string | null, twitter: string | null, github: string | null, facebook: string | null } | null }> };

export type GetTeamMemberQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTeamMemberQuery = { __typename?: 'Query', teamMember: { __typename?: 'TeamMember', _id: string, name: string, position: string, bio: string | null, avatar: string, email: string | null, phone: string | null, skills: Array<string>, isActive: boolean, createdAt: any, updatedAt: any, socialLinks: { __typename?: 'SocialLinks', linkedin: string | null, twitter: string | null, github: string | null, facebook: string | null } | null } };

export type GetContactInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactInfoQuery = { __typename?: 'Query', contactInfo: { __typename?: 'ContactInfo', _id: string, email: string, phone: string, address: string, workingHours: string | null, createdAt: any, updatedAt: any, socialLinks: { __typename?: 'SocialLinks', linkedin: string | null, twitter: string | null, github: string | null, facebook: string | null } | null } };

export type GetContactMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactMessagesQuery = { __typename?: 'Query', contactMessages: Array<{ __typename?: 'ContactMessage', _id: string, name: string, email: string, phone: string | null, subject: string, message: string, isRead: boolean, createdAt: any }> };

export type GetContactMessageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetContactMessageQuery = { __typename?: 'Query', contactMessage: { __typename?: 'ContactMessage', _id: string, name: string, email: string, phone: string | null, subject: string, message: string, isRead: boolean, createdAt: any } };
