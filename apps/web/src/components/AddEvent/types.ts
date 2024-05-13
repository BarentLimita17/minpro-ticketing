export interface ICreateModal {
    visible: boolean
    onClose: () => void
}

export interface ICreateTicketAndPromotionModal {
    visible: boolean
    onClose: () => void
    eventId: any
}

export interface IUpdateTicketModal {
    visible: boolean
    onClose: () => void
    ticketId: any
}

export interface IUpdatePromotionModal {
    visible: boolean
    onClose: () => void
    promotionId: any
}

export interface ICreatedTicketCard {
    id: number
    name: string
    description: string
    price: string
    quantity: number
    validityDate: string
}

export interface ICreatedPromotionCard {
    id: number
    name: string
    code: string
    description: string
    discount: number
    quantity: number
    validityDate: string
}