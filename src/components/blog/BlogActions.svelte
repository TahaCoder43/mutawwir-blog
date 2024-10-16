<script lang="ts">
import { onMount } from "svelte";

export let practicalSectionId: string;

let clicked = false;
let scrolled = false
$: opacity = scrolled ? 0 : 1
$: opacityVar = `--opacity: ${opacity};`

function handleMouseDown () {
    clicked = true
    console.log("clicked should be true")
}

function handleMouseUp () {
    clicked = false
    console.log("clicked should be false")
}

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


<svelte:document on:scroll={handleScroll}/>
<nav>
    <a id=to-code class:clicked={clicked} on:mouseup={handleMouseUp} on:mousedown={handleMouseDown} style={opacityVar} href={"#" + practicalSectionId}>Cut to the code</a>
</nav>

<style lang="scss">

nav {
    position: fixed;
    bottom: 80px;
    left: 0;
    right: 0;

    margin-inline: auto;
    width: fit-content;

    font-size: 2rem;
    font-weight: bold;
    word-spacing: -2px;
    letter-spacing: -2px;

    a#to-code {
        display: inline-block;
        position: relative;

        padding-block: 10px;
        padding-inline: 10px;

        background-image: url("/blog/linear-gradient.png");
        background-size: 400% 100%;
        background-position: 0% 0%;

        color: #222;
        text-decoration: none;

        border-radius: 100px;
        user-select: none;
        opacity: var(--opacity) !important;
        transition: color 0.3s, transform 0.2s, opacity 0.3s;
        animation: gradient-move 15s infinite linear forwards;

        &::before {
            content: "";
            position:absolute;
            top: 0;
            left: 0;
            z-index: -1;

            width: 100%;
            height: 100%;

            background-image: url("/blog/linear-gradient.png");
            background-size: 600% 100%;
            background-position: 0% 0%;

            border-radius: 100px;
            filter: blur(15px);
            opacity: 0.7;
            transition: opacity 0.3s, filter 0.3s;
            animation: gradient-move 15s infinite linear forwards;
        }

        &:hover {
            color: #000;

            &::before {
                opacity: 1;
                filter: blur(25px)
            }
        }

        &.clicked {
            transform: scale(1.2, 0.8);
        }
    }


    @keyframes gradient-move {
        from {
            background-position: 0% 0%;
        }
        to {
            background-position: 600% 0%;
        }
    }
}

</style>
