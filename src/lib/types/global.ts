export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    image: string
    images?: string[]
    technologies: Technology[]
    githubUrl: string
    liveUrl?: string
    featured: boolean
    category: ProjectCategory
    completionDate: string
}

export interface Technology {
    name: string
    color: string
    icon?: string
}

export enum ProjectCategory {
    WEB = 'web',
    MOBILE = 'mobile',
    FULLSTACK = 'fullstack',
    BACKEND = 'backend'
}

export interface Experience {
    id: string
    company: string
    position: string
    duration: string
    description: string
    technologies: Technology[]
    type: 'remote' | 'onsite' | 'hybrid'
    current: boolean
}

export interface ContactFormData {
    name: string
    email: string
    message: string
    subject?: string
}

export interface SocialLink {
    name: string
    url: string
    icon: React.ReactNode
    color: string
}

// Utility types
export type ProjectWithoutId = Omit<Project, 'id'>
export type PartialProject = Partial<Project>
export type ProjectPreview = Pick<Project, 'id' | 'title' | 'description' | 'image' | 'technologies'>