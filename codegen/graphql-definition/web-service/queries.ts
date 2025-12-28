import { gql } from '@apollo/client';

// ============================================
// COMPANY QUERIES
// ============================================

export const GET_COMPANIES = gql`
  query GetCompanies {
    companies {
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

export const GET_COMPANY = gql`
  query GetCompany($id: ID!) {
    company(id: $id) {
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

// ============================================
// SERVICE QUERIES
// ============================================

export const GET_SERVICES = gql`
  query GetServices($isActive: Boolean) {
    services(isActive: $isActive) {
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

export const GET_SERVICE = gql`
  query GetService($id: ID!) {
    service(id: $id) {
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

// ============================================
// TEAM QUERIES
// ============================================

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($isActive: Boolean) {
    teamMembers(isActive: $isActive) {
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

export const GET_TEAM_MEMBER = gql`
  query GetTeamMember($id: ID!) {
    teamMember(id: $id) {
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

// ============================================
// CONTACT QUERIES
// ============================================

export const GET_CONTACT_INFO = gql`
  query GetContactInfo {
    contactInfo {
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

export const GET_CONTACT_MESSAGES = gql`
  query GetContactMessages {
    contactMessages {
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

export const GET_CONTACT_MESSAGE = gql`
  query GetContactMessage($id: ID!) {
    contactMessage(id: $id) {
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
