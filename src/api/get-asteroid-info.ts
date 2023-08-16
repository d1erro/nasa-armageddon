export const getAsteroidInfo = async (id: number) => {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NASA_API}`)
        const asteroid = await response.json();
        return asteroid;
}