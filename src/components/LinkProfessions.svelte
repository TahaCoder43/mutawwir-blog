<script lang="ts">
    import { onMount } from "svelte";
    import BouncyButton from "./BlogsInfo/BouncyButton.svelte";

    let thisLinkProfessions: HTMLElement;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            let linkProfessions = entries[0]
            if (linkProfessions.isIntersecting) {
                linkProfessions.target.querySelectorAll("section").forEach((section) => {
                    section.classList.remove("hidden")
                })
            }
        }, {threshold: 0.5})

        observer.observe(thisLinkProfessions)
    })
</script>

<section id="link-professions" bind:this={thisLinkProfessions}>
    <section class="hidden">
        <img src="/link-professions/programmer-cat.jpg" alt="Purrgrammer: Cat on chair with triple monitor setup"/>
        <h2>Work</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis enim explicabo saepe officiis dolorum!</p>
        <BouncyButton title="Goto my portfolio">Order</BouncyButton>
    </section>
    <div id=seperator />
    <section class="hidden">
        <video src="/link-professions/neuralnexus-homepage.mp4" autoplay muted loop />
        <h2>Institute</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis enim explicabo saepe officiis dolorum!</p>
        <BouncyButton title="Goto my institute">Learn</BouncyButton>
    </section>
    <div id=seperator />
    <section class="hidden">
        <img src="/link-professions/glassmorphic-github-logo.png" alt="Glassmorphic, Acryic, Translucent logo design of github logo"/>
        <h2>Github</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis enim explicabo saepe officiis dolorum!</p>
        <BouncyButton title="Goto my github">Check</BouncyButton>
    </section>
</section>

<style lang="scss">
    #link-professions {
        display: grid;
        grid-template-columns: 300px max-content 300px max-content 300px;
        gap: var(--gap);
        align-items: center;

        height: 100vh;
        max-width: 1400px; // try to increase this by increasing height ig
        margin-inline: auto;
        padding-inline: var(--gap);
        overflow: hidden;

        --gap: calc((100vw - 900px) / 6);

        @media (max-width: 1200px) {
            grid-template-columns: 1fr max-content 1fr max-content 1fr;
            --gap: 50px;
        }

        @media (max-width: 800px) {
            grid-template-columns: min(400px, 85vw);
            grid-template-rows: repeat(5, max-content);
            justify-content: center;

            height: fit-content;
            padding-block: 50px;
        }
    }

    section {
        position: relative;
        right: 0;
        font-size: 1rem;

        @media (max-width: 1000px) {
            font-size: 0.85rem;
        }

        @media (max-width: 900px) {
            font-size: 0.75rem;
        }

        @media (max-width: 800px) {
            font-size: 1rem;
        }

        @media (max-width: 400px) {
            font-size: 0.9rem;
        }

        @media (max-width: 300px) {
            font-size: 0.8rem;
        }

        &:nth-child(1) {
            transition: right 0.3s cubic-bezier(.22,.61,.36,1);
        }

        &:nth-child(3) {
            transition: right 0.7s cubic-bezier(.22,.61,.36,1);
        }

        &:nth-child(5) {
            transition: right 1.1s cubic-bezier(.22,.61,.36,1);
        }

        &.hidden {
            right: 100vw;
        }

        img, video {
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 11;

            border-radius: 10px;
            box-shadow: 3px 5px 10px 2px #0005;
        }

        img {
            object-fit: cover;
        }

        video {
            object-fit: contain;
        }

        h2 {
            color: var(--high-contrast);
            font-family: var(--heading-font);
            font-size: 3em;

            margin-block: 10px 5px;

            @media (max-width: 900px) {
                font-size: 2.5em;
            }

            @media (max-width: 800px) {
                font-size: 3em;
            }
        }

        p {
            color: var(--medium-contrast);

            width: 90%;
            margin-block: 0 10px;
        }

        :global(a) {
            --font-size: 1.5em;
            float: right;
        }

        /* button { */
        /*     font-size: 1.5rem; */
        /*     font-weight: 700; */
        /*     color: white; */
        /**/
        /*     padding-inline: 5px; */
        /*     margin-top: 10px; */
        /**/
        /*     background-color: var(--accent-color); */
        /*     border-radius: 5px; */
        /*     float: right; */
        /* } */
    }

    #seperator {
        width: 1px;
        height: 500px;
        background-image: linear-gradient(to bottom, transparent, var(--background-color) 10%, var(--background-color) 90%, transparent);

        --background-color: #555;

        @media (max-width: 1000px) {
            height: 400px;
        }

        @media (max-width: 900px) {
            height: 320px;
        }

        @media (max-width: 800px) {
            position: relative;
            right: 5%;

            height: 1px;
            width: 110%;

            background-image: linear-gradient(to right, transparent, var(--background-color) 10%, var(--background-color) 90%, transparent);

        }
    }
</style>
