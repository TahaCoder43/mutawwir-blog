<script lang="ts">
import Roll from "./BlogsInfo/Roll.svelte";
import Arc from "./BlogsInfo/arc/Arc.svelte";
import InfoOnBLogs from "./BlogsInfo/InfoOnBlogs.svelte"
import ImagesBlogInfo from "./BlogsInfo/ImagesBlogInfo.svelte"
import FadeBlogsInfo from "./BlogsInfo/FadeBlogsInfo.svelte"

import { onMount } from "svelte";
import useIsMobile from "../lib/useIsMobile";

export let scrollEffectLimit: number;
let thisBlogsInfo: HTMLElement;
let stickyLimitTop: number;
let currentPresentationIndex: number = 0;
let scrolledPerc: number;
let isMobile = useIsMobile();

class NoParentError extends Error {
    constructor(msg: string) {
        super(msg);
        
        Object.setPrototypeOf(this, NoParentError.prototype);
    };
};

function updateCurrentPresentationIndex() {

    const scrollTop = document.documentElement.scrollTop;
    const scrolled = scrollTop - stickyLimitTop;
    const excededScrollEffectLimit = (scrolled > scrollEffectLimit);
    const notReachedScrollEffectArea = (scrolled < 0);

    if (excededScrollEffectLimit) {
        scrolledPerc = 0.99;
    } else if (notReachedScrollEffectArea) {
        scrolledPerc = 0;
    } else {
        scrolledPerc = scrolled / (scrollEffectLimit+1);
    };

    currentPresentationIndex = Math.floor(scrolledPerc * 5.0);
};


onMount(() => {
    const island = thisBlogsInfo.parentElement;
    if (island === null) {
        throw new NoParentError("BlogInfo should have a parent island");
    };

    const stickyLimit = island.parentElement;
    if (stickyLimit === null) {
        throw new NoParentError("BlogInfo's island should have a sticky limit parent");
    };

    stickyLimitTop = stickyLimit.offsetTop;
    updateCurrentPresentationIndex();
    document.addEventListener("scroll", updateCurrentPresentationIndex);
});

</script>

<section id="blogs-info" bind:this={thisBlogsInfo}>
    {#if !$isMobile}
        <FadeBlogsInfo/>
    {/if}
    <Roll {currentPresentationIndex} >
        <InfoOnBLogs/>
    </Roll>
    <Arc {currentPresentationIndex} />
    <div class="spacing"/>
    <Roll {currentPresentationIndex}>
        <ImagesBlogInfo/>
    </Roll>
</section>

<style lang="scss">
    #blogs-info {

        position: sticky;
        top: 0;
        height: 100vh;
        display: flex;
        background-image: radial-gradient(circle at 15% 60%, hsla(270, 80%, 60%, 0.45), transparent 400px),
            radial-gradient(circle at 35% 40%, hsla(200, 80%, 60%, 0.4), transparent 400px),
            radial-gradient(circle at 35% 40%, hsla(200, 80%, 60%, 0.4), transparent 400px),
            ;
        
        @media (max-width: 800px) {
            flex-direction: column;
            background-image: none;
        }

        :global(.content-roll:nth-of-type(1)) {
            flex-shrink: 1;

            @media (max-width: 1100px) {
                flex-shrink: 3;
            }
        }

        .spacing {
            flex-shrink: 2;
            width: 100%;

            @media (max-width: 1100px) {
                flex-shrink: 5;
            }

            @media (max-width: 800px) {
                height: 100%;
                flex-shrink: 4;
            }

            @media (max-width: 500px) {
                flex-shrink: 5;
            }
        }

        :global(> section.content-roll:nth-last-child(1)) {
            position: absolute;
            right: 0;
            top: 0;
            width: 30vw;
            padding-left: 4vw;
            height: 100%;
            background-color: transparent;

            @media (max-width: 1100px) {
                width: 35vw;
            }

            @media (max-width: 800px) {
                bottom: 0;
                left: 0;
                top: auto;
                right: auto;

                height: 45vh;
                width: 100%;
                padding-left: 0;
            }

            @media (max-width: 500px) {
                height: 35vh;
            }

        }

    }
</style>
