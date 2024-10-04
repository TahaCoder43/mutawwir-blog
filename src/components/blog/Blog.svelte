<div class="blog">
    <img class="banner" src="/blog/SnowycapsMilkyway.jpg" alt="Snowcaps Mountains with milkyway glaxy visible on the sky"/>
    <h2 class="title">Alpine Linux Experience</h2>
    <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis atque beatae
    </p>
    <div class="border"></div>
    <div class="tags">
        <span>Linux</span>
        <span>Alpine</span>
        <span>Open-Rc</span>
        <span>Musl-C</span>
    </div>
    <footer>
        <time>04 Oct 2024</time>
        <span>|</span>
        <span class="dificulty hard">Hard</span>
    </footer>
</div>

<style lang="scss">

.blog {
    display: grid;
    grid-template:
        "banner banner      banner banner banner" 1fr
        ".      title       border tags   .     " fit-content(75px)
        ".      description border tags   .     " fit-content(75px)
        ".      description border footer .     " min-content
        / 10px fit-content(220px) 1px min-content 5px;
    row-gap: 10px;
    column-gap: 5px;

    min-width: 350px;
    height: 300px;
    padding-bottom: 10px;

    background-color: var(--verylow-contrast-accent-color);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 5px 5px 2px #0002;

    .banner {
        grid-area: banner;

        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    .title {
        grid-area: title;

        font-family: var(--heading-font);
        font-size: 1.2rem;
        color: var(--high-contrast);
        width: fit-content;

        margin: 0;
    }

    .description {
        grid-area: description;

        font-size: 0.9rem;
        color: var(--medium-contrast);
        width: fit-content;

        margin: 0;
    }

    .border {
        grid-area: border;

        height: 100%;
        width: 1px;
        background-image: radial-gradient(#0008 80%, #0000);
    }

    .tags {
        grid-area: tags;

        width: 100%;
        height: 100%;

        span {
            display: inline-block;

            font-size: 0.8rem;
            color: white;

            margin-bottom: 5px;
            padding: 2px 3px;
            height: fit-content;

            background-color: #222;
            border-radius: 3px;
        }
    }

    footer {
        grid-area: footer;

        min-width: max-content;
        font-size: 0.8rem;

        time {
            color: var(--medium-contrast);
        }

        .dificulty {
            display: inline-block;
            font-weight: 700;
            color: white;
            padding-inline: 3px;
            border-radius: 3px;

            &.easy {
                background-color: green;
            }

            &.normal {
                background-color: yellow;
            }

            &.hard {
                background-color: red;
            }
        }
    }
}

</style>

