<script lang="ts">
import ContentRoll from "./ContentRoll.svelte";
import Arc from "./Arc.svelte"
import { onMount } from "svelte";

const scrollEffectLimit = 1500; // modify css variable in Layout.astro too
let thisBlogsInfo: HTMLElement;
let stickyLimitTop: number;
let currentPresentationIndex: number = 0;
let scrolledPerc: number;

class NoParentError extends Error {
    constructor(msg: string) {
        super(msg)
        
        Object.setPrototypeOf(this, NoParentError.prototype)
    }
}

function updateScrollPerc() {

    const scrollTop = document.documentElement.scrollTop;
    const scrolled = scrollTop - stickyLimitTop
    const excededScrollEffectLimit = (scrolled > scrollEffectLimit)
    const notReachedScrollEffectArea = (scrolled < 0)

    if (excededScrollEffectLimit) {
        scrolledPerc = 1 
    } else if (notReachedScrollEffectArea) {
        scrolledPerc = 0
    } else {
        scrolledPerc = scrolled / scrollEffectLimit
    }

    currentPresentationIndex = Math.floor(scrolledPerc * 5)
}


onMount(() => {
    const island = thisBlogsInfo.parentElement
    if (island === null) {
        throw new NoParentError("BlogInfo should have a parent island")
    }

    const stickyLimit = island.parentElement
    if (stickyLimit === null) {
        throw new NoParentError("BlogInfo's island should have a sticky limit parent")
    }

    stickyLimitTop = stickyLimit.offsetTop
    updateScrollPerc()
    document.addEventListener("scroll", updateScrollPerc)
})

</script>

<section id="blogs-info" bind:this={thisBlogsInfo}>
    <div class={["fade", "top"].join(" ")}></div>
    <div class={["fade", "bottom"].join(" ")}></div>
    <ContentRoll {currentPresentationIndex} />
    <Arc {currentPresentationIndex} />
    <section id="image-roll"></section>
</section>

<style lang="scss">
    #blogs-info {
        position: sticky;
        top: 0;
        height: 100vh;
        display: flex;

        #image-roll {
            background-color: #ffc;
            width: 100%;
            flex-shrink: 2;
        }

        .fade {
            position: absolute;
            left: 0;

            width: 100%;
            height: 100px;

            background-image: linear-gradient(var(--direction), transparent, var(--color-background) 80%);

            &.top {
                top: 0;
                --direction: to top;
            }

            &.bottom {
                bottom: 0;
                --direction: to bottom;
            }
        }
    }
</style>
