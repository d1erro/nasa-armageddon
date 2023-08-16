import AsteroidPage from "@/components/Asteroid/AsteroidPage/AsteroidPage";

const Page = ({ params }: {params : {id: number}}) => {
    return (
        <AsteroidPage id={params.id}/>
    );
};

export default Page;