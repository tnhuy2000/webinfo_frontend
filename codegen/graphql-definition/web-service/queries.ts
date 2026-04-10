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

// Settings Queries
export const GET_PUBLIC_SETTINGS = gql`
  query GetPublicSettings {
    getPublicSettings {
      _id
      key
      value
      category
      description
      type
      isPublic
      isDefault
      createdAt
      updatedAt
    }
  }
`;

// ============================================
// NAVIGATION QUERIES
// ============================================

export const GET_NAVIGATIONS = gql`
  query GetNavigations($isActive: Boolean) {
    navigations(isActive: $isActive) {
      _id
      label
      href
      order
      isActive
    }
  }
`;

// ============================================
// SOCIAL LINK QUERIES
// ============================================

export const GET_SOCIAL_LINKS = gql`
  query GetSocialLinks($isActive: Boolean) {
    socialLinks(isActive: $isActive) {
      _id
      platform
      label
      href
      icon
      order
      isActive
    }
  }
`;

// ============================================
// SKILL QUERIES
// ============================================

export const GET_SKILLS = gql`
  query GetSkills($isActive: Boolean) {
    skills(isActive: $isActive) {
      _id
      title
      description
      variant
      items {
        name
        order
      }
      order
      isActive
    }
  }
`;

// ============================================
// WORK EXPERIENCE QUERIES
// ============================================

export const GET_WORK_EXPERIENCES = gql`
  query GetWorkExperiences($isActive: Boolean) {
    workExperiences(isActive: $isActive) {
      _id
      period
      duration
      company
      position
      technologies
      isHighlighted
      order
      isActive
    }
  }
`;

// ============================================
// TAG QUERIES
// ============================================

export const GET_TAGS = gql`
  query GetTags($isActive: Boolean) {
    tags(isActive: $isActive) {
      _id
      name
      slug
      description
      color
      order
      isActive
    }
  }
`;

export const GET_TAG_BY_SLUG = gql`
  query GetTagBySlug($slug: String!) {
    tagBySlug(slug: $slug) {
      _id
      name
      slug
      description
      color
      order
      isActive
    }
  }
`;

// ============================================
// PROJECT QUERIES
// ============================================

export const GET_PROJECTS = gql`
  query GetProjects($isActive: Boolean, $isFeatured: Boolean, $status: ProjectStatus) {
    projects(isActive: $isActive, isFeatured: $isFeatured, status: $status) {
      _id
      title
      slug
      description
      content
      excerpt
      thumbnail {
        url
        fileName
        type
      }
      images {
        url {
          url
          fileName
          type
        }
        alt
        isFeatured
        order
      }
      tags
      technologies
      links {
        type
        url
        label
      }
      status
      startDate
      endDate
      isFeatured
      order
      isActive
    }
  }
`;

export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: String!) {
    projectBySlug(slug: $slug) {
      _id
      title
      slug
      description
      content
      excerpt
      thumbnail {
        url
        fileName
        type
      }
      images {
        url {
          url
          fileName
          type
        }
        alt
        isFeatured
        order
      }
      tags
      technologies
      links {
        type
        url
        label
      }
      status
      startDate
      endDate
      isFeatured
      order
      isActive
    }
  }
`;

// ============================================
// ARTICLE QUERIES
// ============================================

export const GET_ARTICLES = gql`
  query GetArticles($isActive: Boolean, $isFeatured: Boolean, $status: ArticleStatus) {
    articles(isActive: $isActive, isFeatured: $isFeatured, status: $status) {
      _id
      title
      slug
      description
      content
      excerpt
      thumbnail {
        url
        fileName
        type
      }
      coverImage {
        url
        fileName
        type
      }
      tags
      categories
      status
      publishedAt
      author
      readingTime
      views
      isFeatured
      order
      isActive
    }
  }
`;

export const GET_ARTICLE_BY_SLUG = gql`
  query GetArticleBySlug($slug: String!) {
    articleBySlug(slug: $slug) {
      _id
      title
      slug
      description
      content
      excerpt
      thumbnail {
        url
        fileName
        type
      }
      coverImage {
        url
        fileName
        type
      }
      tags
      categories
      status
      publishedAt
      author
      readingTime
      views
      isFeatured
      order
      isActive
    }
  }
`;
