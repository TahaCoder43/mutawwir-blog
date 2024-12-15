<script lang="ts">

import { onMount } from "svelte";
import CutToTheCode from "./CutToTheCode.svelte";

export let backgroundScrollEffectLimit: number, isLongTitle: boolean, isMediumTitle: boolean, practicalSectionId: string | undefined;
let backgroundScrollEffectLimitVar = `--background-scroll-effect-limit: ${backgroundScrollEffectLimit}px;`;

let scrolled = false
$: opacity = scrolled ? 0 : 1
$: opacityVar = `--opacity: ${opacity};`

function handleScroll() {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop === 0) {
        scrolled = false
    } else {
        scrolled = true
    }
}

onMount(() => {
    handleScroll()
})

</script>

<svelte:document on:scroll={handleScroll} />
<div id="title-container" style={backgroundScrollEffectLimitVar}>
    <h1 id='title' style={opacityVar} class:medium={isMediumTitle} class:small={isLongTitle} itemprop="headline">
         <slot/>
    </h1>
    <!-- {hasPracticalSectionId && <CutToTheCode {practicalSectionId} client:load />} -->

    {#if practicalSectionId !== undefined}
        <CutToTheCode {practicalSectionId} />
    {/if}
</div>

<style lang="scss">

#title-container {
    display: flow-root;
    position: relative;
    max-width: 1050px;
    width: 80%;
    margin-inline: auto;
    height: calc(100vh - var(--navbar-height));
    margin-bottom: calc(var(--background-scroll-effect-limit) + 50px);

    @media (max-width: 700px) {
        font-size: 0.85em;
    }

    @media (max-width: 560px) {
        font-size: 0.70em;
    }

    @media (max-width: 480px) {
        font-size: 0.60em;
    }

    @media (max-width: 420px) {
        font-size: 0.55em;
        width: 90%;
    }
}

#title-container > h1 {
    color: var(--hero-high-contrast);
    font-family: Poppins, sans-serif;
    font-size: 7em;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1.2em;
    margin: 50px 0 0 0;

    opacity: var(--opacity);
    transition: opacity 0.3s;

    &.medium {
        font-size: 6em
    }

    &.small {
        font-size: 5em;
    }
}

</style>

