import AsteroidPage from "@/components/Asteroid/AsteroidPage/AsteroidPage";
import {Metadata} from "next";
import {AsteroidPageParamsType} from "@/types/AsteroidPage.type";

export async function generateMetadata({params: { id }}: AsteroidPageParamsType): Promise<Metadata> {
    return {
        title: `${id} - Asteroid | Armageddon 2023`
    }
}

const Page = ({ params: { id } }: AsteroidPageParamsType) => {
    return (
        <AsteroidPage id={id}/>
    );
};

export default Page;