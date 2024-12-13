
<input type="checkbox" id="open-sidebar"/>
<label for="open-sidebar">=</label>
<section id="menu">
    <section id=socials >
        <a href="https://linkedin.com">
            <img src="/socials/mingcute--linkedin-line.svg" alt="linkedin icon"/>
        </a>
        <a href="https://instagram.com/tahaibnmunawar">
            <img src="/socials/bi--instagram.svg" alt="instagram icon"/>
        </a>
        <a href="https://wa.me/923099005046">
            <img src="/socials/ic--round-whatsapp.svg" alt="instagram icon"/>
        </a>
        <a></a>
    </section>
    <section id=page-links >
        <a href="/">
            <img src="/logo.png" alt="Logo for mutwawwir blog" id=menu-logo />
        </a>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a>About Me</a>
        <a>Contact Me</a>
    </section>
    <section id=other-sites>
        <a href="https://neural-nexus-institute.github.io">
            <img src="/neural-nexus-logo.jpeg" alt="Logo for neural-nexus" />
        </a>
        <a href="https://neural-nexus-institute.github.io">Home</a>
        <a href="https://neural-nexus-institute.github.io/pricing">Pricing</a>
        <a href="https://neural-nexus-institute.github.io/faqs">FAQ</a>
        <a href="https://neural-nexus-institute.github.io/about-us">About</a>
    </section>
</section>

<style lang="scss">


input#open-sidebar {
    display: none;

    @media (max-width: 700px) {
        &:checked {
             ~ label[for="open-sidebar"]  {
                color: #333;
            }

            ~ section#menu {
                top: 0;
                box-shadow: 0 5px 10px 2px #0004;
            }
        }
    }
}

label[for="open-sidebar"] {
    display: none;
    position: relative;
    z-index: 3;

    font-size: 2.0rem;
    color: white;

    user-select: none;

    @media (max-width: 700px) {
        display: block;
    }
}

section#menu {
    display: grid;
    grid-template: 
        "links   other-sites ." 200px
        "socials other-sites ." 1fr
        / 3fr 2fr 30px;
    column-gap: 10px;

    position: absolute;
    top: -300px;
    left: 0;

    height: 300px;
    width: 100%;
    padding: 20px 0 0 20px;

    background-image: linear-gradient(to bottom right, hsl(270, 50%, 90%), hsl(270, 100%, 80%));
    transition: top 0.3s, box-shadow 0.3s;

    /* > a { */
    /*     grid-area: logo; */
    /*     display: inline-block; */
    /*     height: 100%; */
    /*     aspect-ratio: 1; */
    /**/
    /*     img { */
    /*         display: inline-block; */
    /*         width: 100%; */
    /*         height: 100%; */
    /*         box-shadow: 2px 3px 5px 2px #0004; */
    /*         border-radius: 10px; */
    /*     } */
    /* } */

    section#socials {
        grid-area: socials;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            display: inline-block;
            height: 2.5em;
            width: 2.5em;

            @media (max-width: 430px) {
                width: 2em;
                height: 2em;
            }

            @media (max-width: 350px) {
                width: 1.8em;
                height: 1.8em;
            }

            img {
                width: 100%;
                height: 100%;
                opacity: 0.7
            }

            &:first-child,
            &:nth-child(3) {
                transform: scale(1.25);
            }

            &:nth-child(4) {
                background-color: violet;
            }
        }
    }

    section#page-links {
        grid-area: links;
        font-size: 1.8rem;

        @media (max-width: 450px) {
            font-size: 1.5rem;
        }

        @media (max-width: 370px) {
            font-size: 1.2rem;
        }
    }

    section#other-sites {
        grid-area: other-sites;
        font-size: 1.5rem;

        @media (max-width: 450px) {
            font-size: 1.2rem;
        }

        @media (max-width: 370px) {
            font-size: 1rem;
        }
    }

    section#page-links,
    section#other-sites {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        height: fit-content;

        > a {
            display: inline-block;
            width: fit-content;
            height: fit-content;

            font-size: 1em;
            text-decoration: none;
            font-weight: 700;
            color: #eee;

            &:not(:has(> img)) {
                padding: 5px;

                background-color: #0008;
                backdrop-filter: saturate(6);
                border-radius: 10px;

            }

            > img {
                width: 1.6em;
                height: 1.6em;
                border-radius: 5px;
                border: 2px solid #000a;
            }
        }
    }
}

</style>
