export const getAsteroidList = async (fetchDate: string) => {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${fetchDate}&end_date=
        ${fetchDate}&api_key=${process.env.NEXT_PUBLIC_NASA_API}`);
        const data = await response.json();
        const newAsteroids = data.near_earth_objects[fetchDate];
        return newAsteroids;
}