import { StaticImageData } from 'next/image'

export type AsteroidPageParamsType = {
    params: {
        id: number
    }
}

export interface IPlanetImages {
    [planet: string]: StaticImageData
}
