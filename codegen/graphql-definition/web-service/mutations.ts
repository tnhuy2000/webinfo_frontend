import { gql } from '@apollo/client';

// ============================================
// COMPANY MUTATIONS
// ============================================

export const CREATE_COMPANY = gql`
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      _id
      name
      description
      mission
      vision
      founded
      employees
      address {
        street
        city
        country
        zipCode
      }
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_COMPANY = gql`
  mutation UpdateCompany($id: ID!, $input: UpdateCompanyInput!) {
    updateCompany(id: $id, input: $input) {
      _id
      name
      description
      mission
      vision
      founded
      employees
      address {
        street
        city
        country
        zipCode
      }
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_COMPANY = gql`
  mutation RemoveCompany($id: ID!) {
    removeCompany(id: $id)
  }
`;

// ============================================
// SERVICE MUTATIONS
// ============================================

export const CREATE_SERVICE = gql`
  mutation CreateService($input: CreateServiceInput!) {
    createService(input: $input) {
      _id
      title
      description
      icon
      features
      price
      isActive
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SERVICE = gql`
  mutation UpdateService($id: ID!, $input: UpdateServiceInput!) {
    updateService(id: $id, input: $input) {
      _id
      title
      description
      icon
      features
      price
      isActive
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_SERVICE = gql`
  mutation RemoveService($id: ID!) {
    removeService(id: $id)
  }
`;

// ============================================
// TEAM MUTATIONS
// ============================================

export const CREATE_TEAM_MEMBER = gql`
  mutation CreateTeamMember($input: CreateTeamMemberInput!) {
    createTeamMember(input: $input) {
      _id
      name
      position
      bio
      avatar
      email
      phone
      socialLinks {
        linkedin
        twitter
        github
        facebook
      }
      skills
      isActive
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_TEAM_MEMBER = gql`
  mutation UpdateTeamMember($id: ID!, $input: UpdateTeamMemberInput!) {
    updateTeamMember(id: $id, input: $input) {
      _id
      name
      position
      bio
      avatar
      email
      phone
      socialLinks {
        linkedin
        twitter
        github
        facebook
      }
      skills
      isActive
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_TEAM_MEMBER = gql`
  mutation RemoveTeamMember($id: ID!) {
    removeTeamMember(id: $id)
  }
`;

// ============================================
// CONTACT MUTATIONS
// ============================================

export const CREATE_CONTACT_MESSAGE = gql`
  mutation CreateContactMessage($input: CreateContactMessageInput!) {
    createContactMessage(input: $input) {
      _id
      name
      email
      phone
      subject
      message
      isRead
      createdAt
    }
  }
`;

export const MARK_AS_READ = gql`
  mutation MarkAsRead($id: ID!) {
    markAsRead(id: $id) {
      _id
      name
      email
      phone
      subject
      message
      isRead
      createdAt
    }
  }
`;

export const UPDATE_CONTACT_INFO = gql`
  mutation UpdateContactInfo($input: UpdateContactInfoInput!) {
    updateContactInfo(input: $input) {
      _id
      email
      phone
      address
      workingHours
      socialLinks {
        linkedin
        twitter
        github
        facebook
      }
      createdAt
      updatedAt
    }
  }
`;
