<script lang="ts">
import { onMount } from "svelte";


export let backgroundScrollEffectLimit: number, isLongTitle: boolean, isMediumTitle: boolean;
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
<header>
    <h1 id='title' style={backgroundScrollEffectLimitVar + opacityVar} class:medium={isMediumTitle} class:small={isLongTitle}>
        <slot/>
    </h1>
</header>

<style lang="scss">

h1 {
    color: var(--hero-high-contrast);
    font-family: Poppins, sans-serif;
    font-size: 7rem;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;

    max-width: 1000px;
    margin-inline: auto;
    height: calc(100vh - var(--navbar-height));
    margin-bottom: calc(var(--background-scroll-effect-limit));

    opacity: var(--opacity);
    transition: opacity 0.3s;

    &.medium {
        font-size: 6rem
    }

    &.small {
        font-size: 5rem;
    }
}

</style>

