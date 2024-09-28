<script lang="ts">
import Roll from "./Roll.svelte"
import Arc from "./Arc.svelte"
import ContentRollButton from "./ContentRollButton.svelte"
import Coding from "./Coding.svelte"
import Linux from "./Linux.svelte"
import { onMount } from "svelte";

const scrollEffectLimit = 1500; // modify css variable in Layout.astro too
let thisBlogsInfo: HTMLElement;
let stickyLimitTop: number;
let currentPresentationIndex: number = 0;
let scrolledPerc: number;

class NoParentError extends Error {
    constructor(msg: string) {
        super(msg)
        
        Object.setPrototypeOf(this, NoParentError.prototype)
    }
}

function updateCurrentPresentationIndex() {

    const scrollTop = document.documentElement.scrollTop;
    const scrolled = scrollTop - stickyLimitTop
    const excededScrollEffectLimit = (scrolled > scrollEffectLimit)
    const notReachedScrollEffectArea = (scrolled < 0)

    if (excededScrollEffectLimit) {
        scrolledPerc = 0.99
    } else if (notReachedScrollEffectArea) {
        scrolledPerc = 0
    } else {
        scrolledPerc = scrolled / (scrollEffectLimit+1)
    }

    currentPresentationIndex = Math.floor(scrolledPerc * 5.0)
}


onMount(() => {
    const island = thisBlogsInfo.parentElement
    if (island === null) {
        throw new NoParentError("BlogInfo should have a parent island")
    }

    const stickyLimit = island.parentElement
    if (stickyLimit === null) {
        throw new NoParentError("BlogInfo's island should have a sticky limit parent")
    }

    stickyLimitTop = stickyLimit.offsetTop
    updateCurrentPresentationIndex()
    document.addEventListener("scroll", updateCurrentPresentationIndex)
})

</script>

<section id="blogs-info" bind:this={thisBlogsInfo}>
    <div class={["fade", "top"].join(" ")}></div>
    <div class={["fade", "bottom"].join(" ")}></div>
    <Roll {currentPresentationIndex} >
        <section>
            <h2>Introduction</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia. Include here what mutawwir means in arabic, and what hte blog is about
            </p>
            <ContentRollButton> Read </ContentRollButton>
        </section>
        <section>
            <h2>Coding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia.
            </p>
            <ContentRollButton>Read</ContentRollButton>
        </section>
        <section>
            <h2>Linux</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia.
            </p>
            <ContentRollButton>Read</ContentRollButton>
        </section>
        <section>
            <h2>Dev-tools</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia.
            </p>
            <ContentRollButton>Read</ContentRollButton>
        </section>
        <section>
            <h2>IDE & Code-Editors</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia.
            </p>
            <ContentRollButton>Read</ContentRollButton>
        </section>
    </Roll>
    <Arc {currentPresentationIndex} />
    <div class="spacing"/>
    <Roll {currentPresentationIndex}>
        <div class="image-container">
            <img src="/arc/introduction.svg" alt="Computer screen with blog posts"/>
        </div>
        <div class="image-container">
            <Coding/>
        </div>
        <div class="image-container">
            <Linux/>
        </div>
        <div class="image-container">
            <img src="/arc/introduction.svg" alt="Computer screen with blog posts"/>
        </div>
        <div class="image-container">
            <img src="/arc/introduction.svg" alt="Computer screen with blog posts"/>
        </div>
    </Roll>
</section>

<style lang="scss">
    #blogs-info {

        position: sticky;
        top: 0;
        height: 100vh;
        display: flex;
        background-image: radial-gradient(circle at 15% 60%, hsla(270, 80%, 60%, 0.45), transparent 400px),
            radial-gradient(circle at 35% 40%, hsla(200, 80%, 60%, 0.4), transparent 400px),
            radial-gradient(circle at 35% 40%, hsla(200, 80%, 60%, 0.4), transparent 400px),
            ;

        .spacing {
            flex-shrink: 2;
            width: 100%
        }

        :global(> section:nth-last-child(1)) {
            position: absolute;
            right: 0;
            top: 0;
            width: 350px;
            height: 100%;
            background-color: transparent;
        }

        section {
            display: flex;
            justify-content: center;
            flex-direction: column;

            padding-inline: 50px 20px;

            h2 {
                font-size: 5.5rem;
                font-family: var(--heading-font);
                font-weight: 700;
                text-transform: uppercase;
                color: var(--high-contrast);
                letter-spacing: -2px;
                line-height: 1.3em;

                margin-block: 0 
            }

            p {
                font-size: 1.5rem;
                color: var(--medium-contrast);
            }
        }

        .image-container {
            display: flex;
            align-items: center;
            overflow: visible;

            img {
                height: 50%;
            }
        }

        .fade {
            position: absolute;
            left: 0;

            width: 100%;
            height: 100px;

            background-image: linear-gradient(var(--direction), transparent, var(--color-background) 80%);

            &.top {
                top: 0;
                --direction: to top;
            }

            &.bottom {
                bottom: 0;
                --direction: to bottom;
            }
        }
    }
</style>
