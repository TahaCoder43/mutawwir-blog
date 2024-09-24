
<script lang="ts">
import { onMount } from "svelte";

const scrollEffectLimit = 450;
let scrolledPerc: number;
$: scrolledPercVar = `--scrolled-perc: ${scrolledPerc}`
$: console.log("perc", scrolledPerc)
$: console.log("var", scrolledPercVar)

function updateScrollPerc() {
    const scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
    const excededScrollEffectLimit = (scrollTop > scrollEffectLimit)
    if (excededScrollEffectLimit) {
        scrolledPerc = 1 
        return
    }
    scrolledPerc = scrollTop / scrollEffectLimit
}


onMount(() => {
    updateScrollPerc()

    document.addEventListener("scroll", updateScrollPerc)
})
</script>

<video id="background" autoplay={true} loop={true} muted src="/videos/hero-background.mp4" style={scrolledPercVar}></video>

<style lang="scss">
    video#background {
        position: sticky;
        left: calc(var(--width-decrease) / 2);
        top: calc(var(--height-decrease) / 2);

        width: calc(100% - var(--width-decrease));
        height: calc(100vh - var(--height-decrease));
        object-fit: cover;

        border-radius: var(--border-radius-increase);
        filter: brightness(calc(60% + var(--brightness-increase)));
        box-shadow: 3px 5px 10px 2px #0005;

        --max-border-radius-increase: 20px;
        --max-width-decrease: 20%;
        --max-height-decrease: 20vh;
        --max-brightness-increase: 40%;

        --width-decrease: calc(var(--scrolled-perc) * var(--max-width-decrease));
        --height-decrease: calc(var(--scrolled-perc) * var(--max-height-decrease));
        --border-radius-increase: calc(var(--scrolled-perc) * var(--max-border-radius-increase));
        --brightness-increase: calc(var(--scrolled-perc) * var(--max-brightness-increase));
    }
</style>
