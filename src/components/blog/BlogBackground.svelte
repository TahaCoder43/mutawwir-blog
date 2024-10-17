<script lang="ts">

import type { CollectionEntry } from "astro:content";
    import { onMount } from "svelte";

export let img: typeof CollectionEntry<"blog">["data"]["img"];
let hasImage = img !== undefined

let scrolledPerc = 0;
export let scrollEffectLimit: number;
let scrollEffectLimitVar = `--scroll-effect-limit: ${scrollEffectLimit}px;`
$: scrolledPercVar = `--scrolled-perc: ${scrolledPerc};`

function updateScrollPerc() {
    const scrollTop = document.documentElement.scrollTop;
    const excededScrollEffectLimit = (scrollTop > scrollEffectLimit)
    if (excededScrollEffectLimit) {
        scrolledPerc = 1 
        return
    }
    scrolledPerc = scrollTop / scrollEffectLimit
}

onMount(() => {
    updateScrollPerc()
})

</script>

<svelte:document on:scroll={updateScrollPerc} />
<div id=background-stick-limit style={scrollEffectLimitVar}>
    {#if hasImage}
        <img itemprop="image" src={img.path} alt={img.alt} id=background style={scrolledPercVar} />
    {/if}
</div>

<style lang="scss">

#background-stick-limit {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    height: calc(100vh + var(--scroll-effect-limit));

    #background {
        position: sticky;
        margin-left: calc(var(--width-decrease) / 2);
        top: calc(var(--height-decrease) / 2);
        z-index: -1;

        width: calc(100vw - var(--width-decrease));
        height: calc(100vh - var(--height-decrease));
        object-fit: cover;

        border-radius: var(--border-radius-increase);
        filter: brightness(calc(60% + var(--brightness-increase)));
        box-shadow: 3px 5px 10px 2px #0008;


        --max-border-radius-increase: 20px;
        --max-width-decrease: 20vw;
        --max-height-decrease: 20vh;
        --max-brightness-increase: 40%;

        --width-decrease: calc(var(--scrolled-perc) * var(--max-width-decrease));
        --height-decrease: calc(var(--scrolled-perc) * var(--max-height-decrease));
        --border-radius-increase: calc(var(--scrolled-perc) * var(--max-border-radius-increase));
        --brightness-increase: calc(var(--scrolled-perc) * var(--max-brightness-increase));
    }
}

</style>
