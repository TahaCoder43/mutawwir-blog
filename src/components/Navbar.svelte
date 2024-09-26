<script lang="ts">
    import { onMount } from "svelte";
    import Instagram from "./svgs/socials/Instagram.svelte";
    import Linkedin from "./svgs/socials/Linkedin.svelte"

    let visibility = "shown";

    const handleScroll = (function() {
        let priorScrollTop = 0
        return () => {
            let scrollTop = document.documentElement.scrollTop
            let scrolledDown = scrollTop > priorScrollTop
            let scrolledUp = scrollTop < priorScrollTop

            if (scrolledDown) {
                visibility = "hidden"
            } else if (scrolledUp) {
                visibility = ""
            } else {
                console.log("No movement on scroll event fired, is possible")
            }

            priorScrollTop = scrollTop
        }
    })()

    
    onMount(() => {
        document.addEventListener("scroll",  handleScroll)
    })
    

</script>

<nav class={visibility}>
    <img src="/logo.jpg" alt="Logo for mutwawwir blog" id=logo />
    <span id=page-links>
        <slot />
    </span>
    <span id=socials>
        <a id=instagram data-title="Go to my instagram">
            <Instagram />
        </a>
        <a id=linkedin data-title="Go to my linkedin">
            <Linkedin />
        </a>
    </span>
</nav>

<style lang="scss">
    nav {
        position: sticky;
        top: 0;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: var(--navbar-height);
        padding-inline: 20px;
        backdrop-filter: blur(10px);
        background-color: #0008;
        box-shadow: 0 2px 20px 4px #000a;
        transition: top 0.3s;

        &.hidden {
            top: calc(var(--navbar-height) * -1.2) !important;
        }

        #logo {
            height: 4rem;
            border-radius: 10px;
        }

        #page-links {
            display: flex;
            column-gap: 20px;
        }

        #socials {
            display: flex;
            column-gap: 10px;

            a {
                position: relative;

                display: flex;
                align-items: center;
                justify-content: center;

                width: 3rem;
                height: 3rem;
                font-size: 2rem;

                color: var(--hero-verylow-contrast);
                border-radius: 5px;

                transition: color 0.3s, font-size 0.3s;

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
