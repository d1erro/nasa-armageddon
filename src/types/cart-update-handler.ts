export interface ICartUpdateHandler {
    (
        id: string,
        name: string,
        closeApproachDate: string,
        diameter: number,
        isHazard: boolean,
        missDistance: string,
    ): void
}
