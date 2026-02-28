type TReactions = {
    likes: number | null
    dislikes: number | null
}

type TPost = {
    id: number
    title: string
    body: string
    tags?: string[]
    reactions?: TReactions
    views: number
    userId: number
}

export type {TPost}