import {RefObject} from "react";

export interface IObserverProps {
    ref: RefObject<HTMLElement>;
    isLoading: boolean;
    callback: () => void;
}