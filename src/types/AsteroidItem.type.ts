import {NearEarthObject} from "@/types/nasa-data.type";
import {ICartUpdateHandler} from "@/types/cart-update-handler";

export interface IAsteroidItemProps {
    name: string;
    data: NearEarthObject;
    cartUpdateHandler: ICartUpdateHandler
    distanceUnit: string;
    isInCard: boolean;
}