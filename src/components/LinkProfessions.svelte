<script>
    import BouncyButton from "./arc/BouncyButton.svelte";
</script>

<div id="link-professions">
    <section>
        <img src="/link-professions/purrgrammer.jpg"/>
        <h2>Work</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis enim explicabo saepe officiis dolorum!</p>
        <BouncyButton>Order</BouncyButton>
    </section>
    <div id=seperator />
    <section>
        <video src="/link-professions/neuralnexus-homepage.mp4" autoplay muted loop/>
        <h2>Institute</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis enim explicabo saepe officiis dolorum!</p>
        <BouncyButton>Learn</BouncyButton>
    </section>
    <div id=seperator />
    <section>
        <img src="/link-professions/github.png"/>
        <h2>Github</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis enim explicabo saepe officiis dolorum!</p>
        <BouncyButton>Check</BouncyButton>
    </section>
</div>

<style lang="scss">
    #link-professions {
        display: grid;
        grid-template-columns: 300px max-content 300px max-content 300px;
        column-gap: var(--gap);
        align-items: center;

        height: 100vh;
        max-width: 1400px; // try to increase this by increasing height ig
        margin-inline: auto;
        padding-inline: var(--gap);

        --gap: calc((100vw - 900px) / 6);

        @media (max-width: 1200px) {
            grid-template-columns: 1fr max-content 1fr max-content 1fr;
            --gap: 50px;
        }
    }

    section {
        img, video {
            width: 100%;
            height: 200px;

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
            font-size: 3rem;

            margin-block: 10px 5px;
        }

        p {
            color: var(--medium-contrast);

            width: 90%;
            margin-block: 0;
        }

        :global(a) {
            --font-size: 1.5rem;
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
        background-image: linear-gradient(to bottom, transparent, var(--background-color) 50px, var(--background-color) 450px, transparent);

        --background-color: #555
    }
</style>
