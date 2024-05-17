import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information
export async function allMaisons() {
    const records = await pb.collection('maisons').getFullList();
    return records;
    }

export async function oneID(id) {
    const Idrecord = await pb.collection('maisons').getOne(id);
    return Idrecord;
    }

export async function allMaisonsFavoris() {
    const Favrecord = await pb.collection('maisons').getFullList ({filter : 'favoris = true'});
    return Favrecord;
    }

export async function allMaisonsSorted() {
    const Pricerecord = await pb.collection('maisons').getFullList({sort : 'prix'});
    return Pricerecord;
    }

export async function bySurface(surface) {
    const Surfacerecord = await pb.collection('maisons').getFullList( {filter : `surface > ${surface}`});
    return Surfacerecord;
    }

export async function SurfaceOrprice(surface, price) {
    const SurfaceandPricerecord = await pb.collection('maisons').getFullList( {
        filter : `surface > ${surface} ||  prix < ${price}`});
    return SurfaceandPricerecord;
    }

export async function AgentID(id) {
    const AgentIDrecord = await pb.collection('agence').getOne(id);
        return AgentIDrecord;
        }