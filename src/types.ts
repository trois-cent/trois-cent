type Organization = {
    id: string
    createdAt: string
    updatedAt: string

    name: string
    logoUrl: string
    websiteUrl?: string
    type: 'school' | 'other'
    schoolType?: 'primary' | 'secondary' | 'college' | 'university'
    location: string
    contacts: Contact[]
}

type Contact = {
    firstname: string
    lastname: string
    type: 'coach' | 'scout' | 'other'
    sport: string
    email?: string
    phone?: string
}

type AXEvent = {
    id: string
    createdAt: string
    updatedAt: string

    name: string
    description: string
    date: string
    location: string
    organizationId?: string
    organizedBy?: string
    eventUrl?: string
    imageUrl?: string
}
