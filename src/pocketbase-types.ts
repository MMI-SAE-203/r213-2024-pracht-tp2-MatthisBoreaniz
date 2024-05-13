/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agence = "agence",
	Maisons = "maisons",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgenceRecord = {
	adresse?: string
	nom?: string
	prenom?: string
	telephone?: number
}

export type MaisonsRecord = {
	adresse?: string
	favoris?: boolean
	image?: string
	nbChambres?: number
	nbSdb?: number
	nomMaison?: string
	prix?: number
	surface?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgenceResponse<Texpand = unknown> = Required<AgenceRecord> & BaseSystemFields<Texpand>
export type MaisonsResponse<Texpand = unknown> = Required<MaisonsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	agence: AgenceRecord
	maisons: MaisonsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	agence: AgenceResponse
	maisons: MaisonsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'agence'): RecordService<AgenceResponse>
	collection(idOrName: 'maisons'): RecordService<MaisonsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
