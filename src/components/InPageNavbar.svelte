<script lang="ts">
import { onMount, setContext } from "svelte";
import InPageNavbarLink from "./InPageNavbarLink.svelte";

export let bgVideoStickLimit: number;
export let blogsInfoStickLimit: number;
let innerHeight: number;
const additionalVisibleLimit = 100;
$: visibleLimit = bgVideoStickLimit + blogsInfoStickLimit + (innerHeight * 2) + additionalVisibleLimit
let scrollTop: number;
$: visibleLimitReached = scrollTop > visibleLimit

const scrollEffectLimit = 200;
let scrolledPerc: number = 0;
$: scrolledPercVar = `--scrolled-perc: ${scrolledPerc}`
$: setContext("blogsInfoStickLimit", blogsInfoStickLimit)
$: console.log("limits", bgVideoStickLimit, blogsInfoStickLimit, visibleLimit)
$: console.log("visibleLimitReached", visibleLimitReached)

function handleScroll() {
    scrollTop = document.documentElement.scrollTop;
    console.log("scrolling: ", scrollTop)
    const excededScrollEffectLimit = (scrollTop > scrollEffectLimit)
    if (excededScrollEffectLimit) {
        scrolledPerc = 1 
    } else {
        scrolledPerc = scrollTop / scrollEffectLimit
    }
    
    console.log("results", visibleLimitReached, visibleLimit, scrollTop)
}

onMount(handleScroll)


    

</script>

<svelte:document on:scroll={handleScroll} />
<svelte:window bind:innerHeight />
<nav style={scrolledPercVar} class:hidden={visibleLimitReached}>
    <InPageNavbarLink href="#main">Main</InPageNavbarLink>
    <div class=seperator />
    <InPageNavbarLink href="#introduction">Introduction</InPageNavbarLink>
    <div class=seperator />
    <InPageNavbarLink href="#coding">Coding</InPageNavbarLink>
    <div class=seperator />
    <InPageNavbarLink href="#linux">Linux</InPageNavbarLink>
    <div class=seperator />
    <InPageNavbarLink href="#dev-tools">Dev-tools</InPageNavbarLink>
    <div class=seperator />
    <InPageNavbarLink href="#ide">IDE</InPageNavbarLink>
    <div class=seperator />
    <InPageNavbarLink href="#link-professions">Professions</InPageNavbarLink>
</nav>

<style lang="scss">

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 20px;
    z-index: 999;

    max-width: min(800px, 90vw);
    height: 60px;
    margin-inline: auto;

    background-color: rgba(var(--light), var(--light), var(--light), 0.1);
    border-radius: 30px;
    box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, var(--box-shadow-opacity));
    backdrop-filter: blur(30px) saturate(1.5);
    transition: max-width 0.3s, visibility 0s;

    --light: calc(255 - (255 * var(--scrolled-perc)));
    --box-shadow-opacity: calc(0.5 - (0.2 * var(--scrolled-perc)));

    &.hidden {
        max-width: 0px;
        visibility: hidden;
        transition: max-width 0.3s, visibility 0s 0.3s,
    }

    .seperator {
        width: 1px;
        height: 70%;
        background-image: linear-gradient(to bottom, #0000, var(--bg-color) var(--transition), var(--bg-color) calc(100% - var(--transition)), #0000);

        --transition: 30%;
        --bg-color: rgb(var(--light), var(--light), var(--light), 0.6);
    }

}

</style>
