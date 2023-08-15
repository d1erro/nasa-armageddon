import {useEffect, useRef} from "react";
import {IObserverProps} from "@/types/useObserver.type";

export const useObserver = ({ ref, isLoading, callback }: IObserverProps) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        const cb: IntersectionObserverCallback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(cb);

        if (ref.current) {
            observer.current.observe(ref.current);
        }

    }, [isLoading]);
};