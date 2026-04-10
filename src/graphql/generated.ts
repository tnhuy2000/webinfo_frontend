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
  JSON: { input: any; output: any; }
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

export type Article = {
  __typename?: 'Article';
  _id: Scalars['ID']['output'];
  author: Maybe<Scalars['String']['output']>;
  categories: Array<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  coverImage: Maybe<LinkDocument>;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  excerpt: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isFeatured: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  readingTime: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  status: ArticleStatus;
  tags: Array<Scalars['String']['output']>;
  thumbnail: Maybe<LinkDocument>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  views: Scalars['Int']['output'];
};

export enum ArticleStatus {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published'
}

export type BulkSettingInput = {
  key: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
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

export type Content = {
  __typename?: 'Content';
  _id: Scalars['ID']['output'];
  author: Maybe<Scalars['String']['output']>;
  categories: Maybe<Array<Scalars['String']['output']>>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  excerpt: Maybe<Scalars['String']['output']>;
  featuredImage: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  metadata: Maybe<Scalars['JSON']['output']>;
  order: Scalars['Int']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  status: ContentStatus;
  tags: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  type: ContentType;
  updatedAt: Scalars['DateTime']['output'];
};

export enum ContentStatus {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export enum ContentType {
  Banner = 'BANNER',
  Blog = 'BLOG',
  Menu = 'MENU',
  Page = 'PAGE',
  Post = 'POST'
}

export type CreateArticleInput = {
  author: InputMaybe<Scalars['String']['input']>;
  categories: InputMaybe<Array<Scalars['String']['input']>>;
  content: InputMaybe<Scalars['String']['input']>;
  coverImage: InputMaybe<LinkDocumentInput>;
  description: InputMaybe<Scalars['String']['input']>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured: InputMaybe<Scalars['Boolean']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readingTime: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  status: InputMaybe<ArticleStatus>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail: InputMaybe<LinkDocumentInput>;
  title: Scalars['String']['input'];
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

export type CreateContentInput = {
  author: InputMaybe<Scalars['String']['input']>;
  categories: InputMaybe<Array<Scalars['String']['input']>>;
  content: InputMaybe<Scalars['String']['input']>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  featuredImage: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  metadata: InputMaybe<Scalars['JSON']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  slug: Scalars['String']['input'];
  status: InputMaybe<ContentStatus>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  type: InputMaybe<ContentType>;
};

export type CreateNavigationInput = {
  href: Scalars['String']['input'];
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  label: Scalars['String']['input'];
  order: InputMaybe<Scalars['Int']['input']>;
};

export type CreateProjectInput = {
  content: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  endDate: InputMaybe<Scalars['DateTime']['input']>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  images: InputMaybe<Array<ProjectImageInput>>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured: InputMaybe<Scalars['Boolean']['input']>;
  links: InputMaybe<Array<ProjectLinkInput>>;
  order: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  startDate: InputMaybe<Scalars['DateTime']['input']>;
  status: InputMaybe<ProjectStatus>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  technologies: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail: InputMaybe<LinkDocumentInput>;
  title: Scalars['String']['input'];
};

export type CreateServiceInput = {
  description: Scalars['String']['input'];
  features: InputMaybe<Array<Scalars['String']['input']>>;
  icon: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  price: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateSettingInput = {
  category: InputMaybe<SettingCategory>;
  description: InputMaybe<Scalars['String']['input']>;
  isPublic: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
  type: InputMaybe<Scalars['String']['input']>;
  value: Scalars['JSON']['input'];
};

export type CreateSkillInput = {
  description: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  items: InputMaybe<Array<SkillItemInput>>;
  order: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  variant: SkillVariant;
};

export type CreateSocialLinkInput = {
  href: Scalars['String']['input'];
  icon: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  label: Scalars['String']['input'];
  order: InputMaybe<Scalars['Int']['input']>;
  platform: SocialPlatform;
};

export type CreateTagInput = {
  color: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
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

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: InputMaybe<Scalars['String']['input']>;
};

export type CreateWorkExperienceInput = {
  company: Scalars['String']['input'];
  duration: Scalars['String']['input'];
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isHighlighted: InputMaybe<Scalars['Boolean']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  period: Scalars['String']['input'];
  position: Scalars['String']['input'];
  technologies: Scalars['String']['input'];
};

export type LinkDocument = {
  __typename?: 'LinkDocument';
  fileName: Maybe<Scalars['String']['output']>;
  type: Maybe<TypeDocument>;
  url: Maybe<Scalars['String']['output']>;
};

export type LinkDocumentInput = {
  fileName: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<TypeDocument>;
  url: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty: Maybe<Scalars['String']['output']>;
  bulkDeleteContents: Scalars['Int']['output'];
  bulkUpdateSettings: Scalars['Int']['output'];
  createArticle: Article;
  createCompany: Company;
  createContactMessage: ContactMessage;
  createContent: Content;
  createNavigation: Navigation;
  createProject: Project;
  createService: Service;
  createSetting: Setting;
  createSkill: Skill;
  createSocialLink: SocialLink;
  createTag: Tag;
  createTeamMember: TeamMember;
  createUser: User;
  createWorkExperience: WorkExperience;
  deleteArticle: Scalars['Boolean']['output'];
  deleteContent: Scalars['Boolean']['output'];
  deleteNavigation: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  deleteSetting: Scalars['Boolean']['output'];
  deleteSkill: Scalars['Boolean']['output'];
  deleteSocialLink: Scalars['Boolean']['output'];
  deleteTag: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  deleteWorkExperience: Scalars['Boolean']['output'];
  incrementArticleViews: Article;
  initializeDefaultSettings: Scalars['Boolean']['output'];
  markAsRead: ContactMessage;
  removeCompany: Scalars['Boolean']['output'];
  removeService: Scalars['Boolean']['output'];
  removeTeamMember: Scalars['Boolean']['output'];
  updateArticle: Article;
  updateCompany: Company;
  updateContactInfo: ContactInfo;
  updateContent: Content;
  updateNavigation: Navigation;
  updateProject: Project;
  updateService: Service;
  updateSetting: Setting;
  updateSkill: Skill;
  updateSocialLink: SocialLink;
  updateTag: Tag;
  updateTeamMember: TeamMember;
  updateUser: User;
  updateWorkExperience: WorkExperience;
};


export type MutationBulkDeleteContentsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationBulkUpdateSettingsArgs = {
  settings: Array<BulkSettingInput>;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationCreateContactMessageArgs = {
  input: CreateContactMessageInput;
};


export type MutationCreateContentArgs = {
  input: CreateContentInput;
};


export type MutationCreateNavigationArgs = {
  input: CreateNavigationInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateServiceArgs = {
  input: CreateServiceInput;
};


export type MutationCreateSettingArgs = {
  input: CreateSettingInput;
};


export type MutationCreateSkillArgs = {
  input: CreateSkillInput;
};


export type MutationCreateSocialLinkArgs = {
  input: CreateSocialLinkInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateTeamMemberArgs = {
  input: CreateTeamMemberInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateWorkExperienceArgs = {
  input: CreateWorkExperienceInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNavigationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSettingArgs = {
  key: Scalars['String']['input'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSocialLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWorkExperienceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementArticleViewsArgs = {
  id: Scalars['ID']['input'];
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


export type MutationUpdateArticleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateArticleInput;
};


export type MutationUpdateCompanyArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCompanyInput;
};


export type MutationUpdateContactInfoArgs = {
  input: UpdateContactInfoInput;
};


export type MutationUpdateContentArgs = {
  id: Scalars['ID']['input'];
  input: UpdateContentInput;
};


export type MutationUpdateNavigationArgs = {
  id: Scalars['ID']['input'];
  input: UpdateNavigationInput;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID']['input'];
  input: UpdateProjectInput;
};


export type MutationUpdateServiceArgs = {
  id: Scalars['ID']['input'];
  input: UpdateServiceInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
  key: Scalars['String']['input'];
};


export type MutationUpdateSkillArgs = {
  id: Scalars['ID']['input'];
  input: UpdateSkillInput;
};


export type MutationUpdateSocialLinkArgs = {
  id: Scalars['ID']['input'];
  input: UpdateSocialLinkInput;
};


export type MutationUpdateTagArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTagInput;
};


export type MutationUpdateTeamMemberArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTeamMemberInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};


export type MutationUpdateWorkExperienceArgs = {
  id: Scalars['ID']['input'];
  input: UpdateWorkExperienceInput;
};

export type Navigation = {
  __typename?: 'Navigation';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  href: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PaginatedContent = {
  __typename?: 'PaginatedContent';
  data: Maybe<Array<Maybe<Content>>>;
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['ID']['output'];
  content: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  endDate: Maybe<Scalars['DateTime']['output']>;
  excerpt: Maybe<Scalars['String']['output']>;
  images: Array<ProjectImage>;
  isActive: Scalars['Boolean']['output'];
  isFeatured: Scalars['Boolean']['output'];
  links: Array<ProjectLink>;
  order: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  startDate: Maybe<Scalars['DateTime']['output']>;
  status: ProjectStatus;
  tags: Array<Scalars['String']['output']>;
  technologies: Array<Scalars['String']['output']>;
  thumbnail: Maybe<LinkDocument>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProjectImage = {
  __typename?: 'ProjectImage';
  alt: Maybe<Scalars['String']['output']>;
  isFeatured: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  url: Maybe<LinkDocument>;
};

export type ProjectImageInput = {
  alt: InputMaybe<Scalars['String']['input']>;
  isFeatured: InputMaybe<Scalars['Boolean']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  url: InputMaybe<LinkDocumentInput>;
};

export type ProjectLink = {
  __typename?: 'ProjectLink';
  label: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ProjectLinkInput = {
  label: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export enum ProjectStatus {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published'
}

export type Query = {
  __typename?: 'Query';
  _empty: Maybe<Scalars['String']['output']>;
  allSettingsAsObject: Scalars['JSON']['output'];
  article: Article;
  articleBySlug: Article;
  articles: Array<Article>;
  companies: Array<Company>;
  company: Company;
  contactInfo: ContactInfo;
  contactMessage: ContactMessage;
  contactMessages: Array<ContactMessage>;
  content: Content;
  contentBySlug: Content;
  contents: PaginatedContent;
  getPublicSettings: Array<Setting>;
  me: User;
  navigation: Navigation;
  navigations: Array<Navigation>;
  project: Project;
  projectBySlug: Project;
  projects: Array<Project>;
  service: Service;
  services: Array<Service>;
  setting: Setting;
  settings: Array<Setting>;
  skill: Skill;
  skills: Array<Skill>;
  socialLink: SocialLink;
  socialLinks: Array<SocialLink>;
  tag: Tag;
  tagBySlug: Tag;
  tags: Array<Tag>;
  teamMember: TeamMember;
  teamMembers: Array<TeamMember>;
  user: User;
  users: Array<User>;
  workExperience: WorkExperience;
  workExperiences: Array<WorkExperience>;
};


export type QueryArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArticleBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryArticlesArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured: InputMaybe<Scalars['Boolean']['input']>;
  status: InputMaybe<ArticleStatus>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContentBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryContentsArgs = {
  query: InputMaybe<QueryContentInput>;
};


export type QueryNavigationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNavigationsArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProjectBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProjectsArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured: InputMaybe<Scalars['Boolean']['input']>;
  status: InputMaybe<ProjectStatus>;
};


export type QueryServiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServicesArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySettingArgs = {
  key: Scalars['String']['input'];
};


export type QuerySettingsArgs = {
  category: InputMaybe<SettingCategory>;
};


export type QuerySkillArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySkillsArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySocialLinkArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySocialLinksArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryTagsArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTeamMemberArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTeamMembersArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWorkExperienceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWorkExperiencesArgs = {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryContentInput = {
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sortBy: InputMaybe<Scalars['String']['input']>;
  sortOrder: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<ContentStatus>;
  type: InputMaybe<ContentType>;
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

export type Setting = {
  __typename?: 'Setting';
  _id: Scalars['ID']['output'];
  category: SettingCategory;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  isDefault: Maybe<Scalars['Boolean']['output']>;
  isPublic: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['JSON']['output'];
};

export enum SettingCategory {
  Advanced = 'ADVANCED',
  Contact = 'CONTACT',
  Content = 'CONTENT',
  General = 'GENERAL',
  Seo = 'SEO',
  Social = 'SOCIAL',
  Theme = 'THEME'
}

export type Skill = {
  __typename?: 'Skill';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  items: Array<SkillItem>;
  order: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variant: SkillVariant;
};

export type SkillItem = {
  __typename?: 'SkillItem';
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
};

export type SkillItemInput = {
  name: Scalars['String']['input'];
  order: InputMaybe<Scalars['Int']['input']>;
};

export enum SkillVariant {
  Backend = 'backend',
  Devops = 'devops',
  Frontend = 'frontend',
  Styles = 'styles'
}

export type SocialLink = {
  __typename?: 'SocialLink';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  href: Scalars['String']['output'];
  icon: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  platform: SocialPlatform;
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

export enum SocialPlatform {
  Email = 'email',
  Facebook = 'facebook',
  Github = 'github',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Other = 'other',
  Telegram = 'telegram',
  Twitter = 'twitter',
  Youtube = 'youtube'
}

export type Tag = {
  __typename?: 'Tag';
  _id: Scalars['ID']['output'];
  color: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
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

export enum TypeDocument {
  File = 'file',
  Link = 'link'
}

export type UpdateArticleInput = {
  author: InputMaybe<Scalars['String']['input']>;
  categories: InputMaybe<Array<Scalars['String']['input']>>;
  content: InputMaybe<Scalars['String']['input']>;
  coverImage: InputMaybe<LinkDocumentInput>;
  description: InputMaybe<Scalars['String']['input']>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured: InputMaybe<Scalars['Boolean']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readingTime: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<ArticleStatus>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail: InputMaybe<LinkDocumentInput>;
  title: InputMaybe<Scalars['String']['input']>;
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

export type UpdateContentInput = {
  author: InputMaybe<Scalars['String']['input']>;
  categories: InputMaybe<Array<Scalars['String']['input']>>;
  content: InputMaybe<Scalars['String']['input']>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  featuredImage: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  metadata: InputMaybe<Scalars['JSON']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<ContentStatus>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  title: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<ContentType>;
};

export type UpdateNavigationInput = {
  href: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProjectInput = {
  content: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  endDate: InputMaybe<Scalars['DateTime']['input']>;
  excerpt: InputMaybe<Scalars['String']['input']>;
  images: InputMaybe<Array<ProjectImageInput>>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured: InputMaybe<Scalars['Boolean']['input']>;
  links: InputMaybe<Array<ProjectLinkInput>>;
  order: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  startDate: InputMaybe<Scalars['DateTime']['input']>;
  status: InputMaybe<ProjectStatus>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  technologies: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail: InputMaybe<LinkDocumentInput>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateServiceInput = {
  description: InputMaybe<Scalars['String']['input']>;
  features: InputMaybe<Array<Scalars['String']['input']>>;
  icon: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  price: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSettingInput = {
  category: InputMaybe<SettingCategory>;
  description: InputMaybe<Scalars['String']['input']>;
  isPublic: InputMaybe<Scalars['Boolean']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
  value: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateSkillInput = {
  description: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  items: InputMaybe<Array<SkillItemInput>>;
  order: InputMaybe<Scalars['Int']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
  variant: InputMaybe<SkillVariant>;
};

export type UpdateSocialLinkInput = {
  href: InputMaybe<Scalars['String']['input']>;
  icon: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  platform: InputMaybe<SocialPlatform>;
};

export type UpdateTagInput = {
  color: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
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

export type UpdateUserInput = {
  email: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  role: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkExperienceInput = {
  company: InputMaybe<Scalars['String']['input']>;
  duration: InputMaybe<Scalars['String']['input']>;
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isHighlighted: InputMaybe<Scalars['Boolean']['input']>;
  order: InputMaybe<Scalars['Int']['input']>;
  period: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['String']['input']>;
  technologies: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type WorkExperience = {
  __typename?: 'WorkExperience';
  _id: Scalars['ID']['output'];
  company: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  duration: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isHighlighted: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  period: Scalars['String']['output'];
  position: Scalars['String']['output'];
  technologies: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
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

export type GetPublicSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPublicSettingsQuery = { __typename?: 'Query', getPublicSettings: Array<{ __typename?: 'Setting', _id: string, key: string, value: any, category: SettingCategory, description: string | null, type: string, isPublic: boolean, isDefault: boolean | null, createdAt: any, updatedAt: any }> };

export type GetNavigationsQueryVariables = Exact<{
  isActive: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetNavigationsQuery = { __typename?: 'Query', navigations: Array<{ __typename?: 'Navigation', _id: string, label: string, href: string, order: number, isActive: boolean }> };

export type GetSocialLinksQueryVariables = Exact<{
  isActive: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetSocialLinksQuery = { __typename?: 'Query', socialLinks: Array<{ __typename?: 'SocialLink', _id: string, platform: SocialPlatform, label: string, href: string, icon: string | null, order: number, isActive: boolean }> };

export type GetSkillsQueryVariables = Exact<{
  isActive: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetSkillsQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', _id: string, title: string, description: string | null, variant: SkillVariant, order: number, isActive: boolean, items: Array<{ __typename?: 'SkillItem', name: string, order: number }> }> };

export type GetWorkExperiencesQueryVariables = Exact<{
  isActive: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetWorkExperiencesQuery = { __typename?: 'Query', workExperiences: Array<{ __typename?: 'WorkExperience', _id: string, period: string, duration: string, company: string, position: string, technologies: string, isHighlighted: boolean, order: number, isActive: boolean }> };

export type GetTagsQueryVariables = Exact<{
  isActive: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetTagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', _id: string, name: string, slug: string, description: string | null, color: string | null, order: number, isActive: boolean }> };

export type GetTagBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetTagBySlugQuery = { __typename?: 'Query', tagBySlug: { __typename?: 'Tag', _id: string, name: string, slug: string, description: string | null, color: string | null, order: number, isActive: boolean } };

export type GetProjectsQueryVariables = Exact<{
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured: InputMaybe<Scalars['Boolean']['input']>;
  status: InputMaybe<ProjectStatus>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', _id: string, title: string, slug: string, description: string | null, content: string | null, excerpt: string | null, tags: Array<string>, technologies: Array<string>, status: ProjectStatus, startDate: any | null, endDate: any | null, isFeatured: boolean, order: number, isActive: boolean, thumbnail: { __typename?: 'LinkDocument', url: string | null, fileName: string | null, type: TypeDocument | null } | null, images: Array<{ __typename?: 'ProjectImage', alt: string | null, isFeatured: boolean, order: number, url: { __typename?: 'LinkDocument', url: string | null, fileName: string | null, type: TypeDocument | null } | null }>, links: Array<{ __typename?: 'ProjectLink', type: string, url: string, label: string | null }> }> };

export type GetProjectBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetProjectBySlugQuery = { __typename?: 'Query', projectBySlug: { __typename?: 'Project', _id: string, title: string, slug: string, description: string | null, content: string | null, excerpt: string | null, tags: Array<string>, technologies: Array<string>, status: ProjectStatus, startDate: any | null, endDate: any | null, isFeatured: boolean, order: number, isActive: boolean, thumbnail: { __typename?: 'LinkDocument', url: string | null, fileName: string | null, type: TypeDocument | null } | null, images: Array<{ __typename?: 'ProjectImage', alt: string | null, isFeatured: boolean, order: number, url: { __typename?: 'LinkDocument', url: string | null, fileName: string | null, type: TypeDocument | null } | null }>, links: Array<{ __typename?: 'ProjectLink', type: string, url: string, label: string | null }> } };

export type GetArticlesQueryVariables = Exact<{
  isActive: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured: InputMaybe<Scalars['Boolean']['input']>;
  status: InputMaybe<ArticleStatus>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', _id: string, title: string, slug: string, description: string | null, content: string | null, excerpt: string | null, tags: Array<string>, categories: Array<string>, status: ArticleStatus, publishedAt: any | null, author: string | null, readingTime: number, views: number, isFeatured: boolean, order: number, isActive: boolean, thumbnail: { __typename?: 'LinkDocument', url: string | null, fileName: string | null, type: TypeDocument | null } | null, coverImage: { __typename?: 'LinkDocument', url: string | null, fileName: string | null, type: TypeDocument | null } | null }> };

export type GetArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetArticleBySlugQuery = { __typename?: 'Query', articleBySlug: { __typename?: 'Article', _id: string, title: string, slug: string, description: string | null, content: string | null, excerpt: string | null, tags: Array<string>, categories: Array<string>, status: ArticleStatus, publishedAt: any | null, author: string | null, readingTime: number, views: number, isFeatured: boolean, order: number, isActive: boolean, thumbnail: { __typename?: 'LinkDocument', url: string | null, fileName: string | null, type: TypeDocument | null } | null, coverImage: { __typename?: 'LinkDocument', url: string | null, fileName: string | null, type: TypeDocument | null } | null } };
