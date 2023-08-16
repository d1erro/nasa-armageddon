import {useEffect, useRef} from "react";
import {IObserverProps} from "@/types/useObserver.type";

export const useObserver = ({ ref, isLoading, callback }: IObserverProps) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        const cb: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting) {
                callback();
            }
        };
        const options = {
            rootMargin: "30%"
        }
        observer.current = new IntersectionObserver(cb, options);

        if (ref.current) {
            observer.current.observe(ref.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);
};