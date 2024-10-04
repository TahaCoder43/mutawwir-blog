
<script lang="ts">
import { onMount } from "svelte";

export let scrollEffectLimit: number;
let scrolledPerc: number;
$: scrolledPercVar = `--scrolled-perc: ${scrolledPerc}`

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

    document.addEventListener("scroll", updateScrollPerc)
})
</script>

<div id="container">
    <video id="background" autoplay loop muted src="/videos/hero-background.mp4" style={scrolledPercVar} aria-label="Background Video"></video>
</div>

<style lang="scss">
    #container {
        position: sticky;
        left: 0;
        top: 0;
        height: 100vh;
        background-image: radial-gradient(400px at top right, hsla(270, 80%, 60%, 0.5), transparent),
            radial-gradient(400px at top left, hsla(200, 80%, 60%, 0.5), transparent);

        video#background {
            position: absolute;
            left: calc(var(--width-decrease) / 2);
            top: calc(var(--height-decrease) / 2);

            width: calc(100vw - var(--width-decrease));
            height: calc(100vh - var(--height-decrease));
            object-fit: cover;

            border-radius: var(--border-radius-increase);
            filter: brightness(calc(60% + var(--brightness-increase)));
            box-shadow: 3px 5px 10px 2px #0005;

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
