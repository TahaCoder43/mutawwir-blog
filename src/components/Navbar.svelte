<script lang="ts">
    import { onMount } from "svelte";
    import Instagram from "./svgs/socials/Instagram.svelte";
    import Linkedin from "./svgs/socials/Linkedin.svelte"
    import Menu from "./Menu.svelte"

    let visibility = "shown";
    let scrolledPerc= 0;
    $: scrolledPercVar = `--scrolled-perc: ${scrolledPerc};`
    let scrollEffectLimit = 200;
    let thisNav: HTMLElement;
    $: console.log(thisNav)

    function hideAndShow(priorScrollTop: number, scrollTop: number) {
        let scrolledDown = scrollTop > priorScrollTop
        let scrolledUp = scrollTop < priorScrollTop

        if (thisNav !== null) {
            if (thisNav.querySelector(":scope > input#open-sidebar:checked")) {
                console.log("comes here")
                return
            }
        }

        console.log("and heree")

        if (scrolledDown) {
            visibility = "hidden"
        } else if (scrolledUp) {
            visibility = ""
        } else {
            console.log("No movement on scroll event fired, is possible")
        }
    }

    function updateScrollPerc(scrollTop: number) {
        const excededScrollEffectLimit = (scrollTop > scrollEffectLimit)
        if (excededScrollEffectLimit) {
            scrolledPerc = 1 
            return
        }
        scrolledPerc = scrollTop / scrollEffectLimit

    }

    const handleScroll = (function() {
        let priorScrollTop = 0
        return () => {
            let scrollTop = document.documentElement.scrollTop
            hideAndShow(priorScrollTop, scrollTop)
            updateScrollPerc(scrollTop)
            priorScrollTop = scrollTop
        }
    })()

    
    onMount(() => {
        document.addEventListener("scroll",  handleScroll)
    })

</script>

<nav class={visibility} style={scrolledPercVar} bind:this={thisNav}>
    <a href="/">
        <img src="/logo.png" alt="Logo for mutwawwir blog" id=logo />
    </a>
    <span id=page-links>
        <slot />
    </span>
    <span id=socials>
        <a id=instagram title="Go to my instagram">
            <Instagram />
        </a>
        <a id=linkedin title="Go to my linkedin">
            <Linkedin />
        </a>
    </span>
    <Menu />
</nav>

<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: sticky;
        top: 0;
        z-index: 999;

        height: var(--navbar-height);
        padding-inline: 20px;

        backdrop-filter: blur(30px) saturate(1.3);
        background-color: rgba(0, 0, 0, var(--opacity));
        box-shadow: 0 2px 20px 4px rgba(0, 0, 0, var(--box-shadow-opacity));
        transition: top 0.3s;

        --opacity: calc(0.5 - (0.4 * var(--scrolled-perc)));
        --box-shadow-opacity: calc(0.7 - (0.4 * var(--scrolled-perc)));

        &.hidden {
            top: calc(var(--navbar-height) * -1.2) !important;
        }

        img#logo {
            height: 4rem;
            border-radius: 10px;
        }

        span#page-links {
            display: flex;
            column-gap: 20px;

            @media (max-width: 700px) {
                display: none;
            }
        }

        span#socials {
            display: flex;
            column-gap: 10px;

            @media (max-width: 700px) {
                display: none;
            }

            a {
                position: relative;

                display: flex;
                align-items: center;
                justify-content: center;

                width: 3rem;
                height: 3rem;
                font-size: 2rem;

                color: rgb(var(--light), var(--light), var(--light));
                border-radius: 5px;

                transition: color 0.3s, font-size 0.3s;

                --light: calc(190 - (90 * var(--scrolled-perc)));

                &:hover {
                    color: #eee;
                    font-size: 2.5rem;
                }

                &:nth-child(2) {
                    font-size: 2.5rem;

                    &:hover {
                        font-size: 3.2rem
                    }
                }
            }
        }



    }
</style>
