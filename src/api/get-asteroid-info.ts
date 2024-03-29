export const getAsteroidInfo = async (id: number) => {
    const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_NASA_API}`,
        { cache: 'force-cache' },
    )
    const asteroid = await response.json()
    return asteroid
}
