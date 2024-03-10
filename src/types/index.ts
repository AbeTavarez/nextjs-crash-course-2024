import { ObjectId } from "mongodb"

export type Member = {
    _id: ObjectId,
    name: string,
    avatar: string,
    createdAt: string,
}