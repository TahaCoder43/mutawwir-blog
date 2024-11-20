import { onMount } from "svelte";
import { writable } from "svelte/store";

const useIsMobile = (function () {
    const isMobile = writable<boolean>(false);
    isMobile.subscribe(console.log);

    function updateIsMobile() {
        if (window === undefined) {
            console.error("window should be defined to run setIsMobile");
            return;
        }

        isMobile.set(window.innerWidth <= 800);
    }

    return () => {
        onMount(() => {
            updateIsMobile();
            window.addEventListener("resize", updateIsMobile);
            () => {
                window.removeEventListener("resize", updateIsMobile);
            };
        });

        return isMobile;
    };
})();

export default useIsMobile;
