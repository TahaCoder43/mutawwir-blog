<section>
    <h2>Authored by</h2>
    <p> Taha ibn Munawar </p>
    <div>
        Full-stack developer / Bot developer / Experience in databases
    </div>
    <img src="/blog/author-picture.png" alt="representing author (not of author)" />
</section>

<style lang="scss">

section {
    display: grid;
    position: relative;
    grid-template: 
        ".       image" 10px
        "heading image" max-content
        "name    image" max-content
        "info    image" max-content
        / max-content 230px;

    justify-content: space-between;
    row-gap: 15px;

    height: 250px;
    max-width: var(--max-width);
    margin: 50px auto 0 auto;
    padding: 10px 20px;

    background-image: linear-gradient(to bottom right, hsl(280, 100%, 80%) 50%, hsl(250, 100%, 80%));
    border-radius: 10px;
    /* box-shadow: 3px 5px 10px 2px #0004; */

    &::before {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        z-index: -1;

        width: calc(100% + 20px);
        height: calc(100% + 20px);

        background-image: linear-gradient(to bottom right, hsl(280, 100%, 80%) 50%, hsl(250, 100%, 80%));
        filter: blur(20px);

    }

    > h2 {
        grid-area: heading;

        font-size: 2.5rem;
        font-family: var(--heading-font);
        color: var(--high-contrast);
        margin: 0;
    }

    > p {
        grid-area: name;

        font-size: 1.5rem;
        font-weight: 600;
        color: var(--medium-contrast);
        margin: 0;
    }

    > div {
        grid-area: info;
        display: flex;
        width: fit-content;
    }

    > img {
        grid-area: image;
        height: 100%;
        width: 100%;
    }
}


</style>
