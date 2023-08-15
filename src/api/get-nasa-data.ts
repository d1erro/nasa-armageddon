export const getNasaData = async (fetchDate: string) => {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${fetchDate}&end_date=
        ${fetchDate}&api_key=hvcT9WhJJSN4PwMpApM6cIjt9u6TxC7I0sa1iBWG`);


        const data = await response.json();
        const newAsteroids = data.near_earth_objects[fetchDate];
        return newAsteroids;
}