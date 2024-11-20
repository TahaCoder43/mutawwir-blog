<script lang="ts">
    import { onMount } from "svelte";

let thisContentRoll: HTMLElement;
export let currentPresentationIndex: number; 
let isMobile: boolean;

$: updateCurrentSection(currentPresentationIndex, thisContentRoll, isMobile)
$: console.log("IsMobile updated", isMobile)

function setIsMobile() {
    if (window === undefined) {
        console.log("setIsMobile() is supposed to run on client")
        return
    }

    if (window.innerWidth <= 800) {
        isMobile = true
    } else {
        isMobile = false
    }
}

function updateCurrentSection(currentPresentationIndex: number, thisContentRoll: HTMLElement, isMobile: boolean) {
    try {
        const multiplier = isMobile ? window.innerWidth : window.innerHeight
        const scrollPx = multiplier * currentPresentationIndex
        if (isMobile) {
            thisContentRoll.scrollTo(scrollPx, 0)
        } else {
            thisContentRoll.scrollTo(0, scrollPx)
        }
    } catch(err) {
        if (!(err instanceof ReferenceError || err instanceof TypeError)) {
            throw err
        }
        console.log("ReferenceError or TypeError, not important")
        return
    }
}

onMount(setIsMobile)

</script>

<svelte:window on:resize={setIsMobile}/>
<section class="content-roll" bind:this={thisContentRoll} >
    <slot/>
</section>

<style lang="scss">
    .content-roll {
        /* background-color: #ddddff; */
        width: 100%;
        overflow: hidden;
        scroll-behavior: smooth;

        :global(> *) {
            height: 100%;
        }

        @media (max-width: 800px) {
            display: flex;
            height: 100%;

            :global(> *) {
                min-width: 100%;
            }
        }
    }
</style>
