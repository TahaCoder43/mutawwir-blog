<script lang="ts">
    import { onMount, setContext } from "svelte";
    import InPageNavbarLink from "./InPageNavbarLink.svelte";


import { fly } from "svelte/transition";

export let blogsInfoStickLimit: number;
const scrollEffectLimit = 200;
let scrolledPerc: number = 0;
$: scrolledPercVar = `--scrolled-perc: ${scrolledPerc}`
$: setContext("blogsInfoStickLimit", blogsInfoStickLimit)

function handleScroll() {
    const scrollTop = document.documentElement.scrollTop;
    console.log("scrolling: ", scrollTop)
    const excededScrollEffectLimit = (scrollTop > scrollEffectLimit)
    if (excededScrollEffectLimit) {
        scrolledPerc = 1 
        return
    }
    scrolledPerc = scrollTop / scrollEffectLimit
}

onMount(handleScroll)

</script>

<svelte:document on:scroll={handleScroll}/>
<nav transition:fly style={scrolledPercVar}>
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

    max-width: 800px;
    height: 60px;
    margin-inline: auto;

    background-color: rgba(var(--light), var(--light), var(--light), 0.1);
    border-radius: 30px;
    box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, var(--box-shadow-opacity));
    backdrop-filter: blur(30px) saturate(1.5);

    --light: calc(255 - (255 * var(--scrolled-perc)));
    --box-shadow-opacity: calc(0.5 - (0.2 * var(--scrolled-perc)));

    .seperator {
        width: 1px;
        height: 70%;
        background-image: linear-gradient(to bottom, #0000, var(--bg-color) var(--transition), var(--bg-color) calc(100% - var(--transition)), #0000);

        --transition: 30%;
        --bg-color: rgb(var(--light), var(--light), var(--light), 0.6);
    }
}

</style>
