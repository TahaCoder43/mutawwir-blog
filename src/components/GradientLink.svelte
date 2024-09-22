<script lang="ts">

    export let href: string = "";

    let direction = "right", color1Distance = 0,  color2Distance = 100;
    let animation_id: number;
    let lastTimestamp: number;
    let fps = 1

    $: linearGradient = `linear-gradient(to ${direction}, #83f ${color1Distance}%, #38f ${color2Distance}%)`;
    $: linearGradientVariable = `--linear-gradient: ${linearGradient}`

    function gradientMove(timestamp: number) {
        if (lastTimestamp) {
            let timeDiff = timestamp - lastTimestamp
            fps = Math.round(1000 / timeDiff)
            fps = (fps === 0) ? 1 : fps
        }
        lastTimestamp = timestamp


        if (direction === "right") {
            color1Distance += 5 * (60 / fps)
        } else {
            color1Distance -= 5 * (60 / fps)
        }
        if (color1Distance >= 100) {
            direction = "left"
        } else if (color1Distance <= -100) {
            direction = "right"
        }

        animation_id = window.requestAnimationFrame(gradientMove)
    }

    function handleMouseEnter() {
        animation_id = window.requestAnimationFrame(gradientMove)
    }

    function handleMouseLeave() {
        window.cancelAnimationFrame(animation_id)
    }

</script>

<a {href} style={linearGradientVariable} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
    <slot />
</a>

<style lang="scss">
    a {
        display: block;

        text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--hero-low-contrast);

        border-bottom: solid 2px #50f0;
        border-radius: 5px;

        background-image: var(--linear-gradient);
        background-clip: text;

        transition: color 0.5s, border-bottom-color 0.3s;

        &:hover {
            color: transparent;
            border-bottom-color: #50fc;
            transition: color 0.3s, text-decoration-color 0.3s;
        }
        
    }
</style>
