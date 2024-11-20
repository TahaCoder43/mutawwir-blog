<script lang="ts">


</script>

<footer>
    <nav>
        <span>
            <h2>Main</h2>
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/about-me">About Me</a>
            <a href="/contact-me">Contact Me</a>
        </span>
        <span>
            <h2>Blogs</h2>
            <a href="/blog#coding">Coding</a>
            <a href="/blog#linux">Linux</a>
            <a href="/blog#dev-tools">Dev-Tools</a>
            <a href="/blog#ide">IDE & Code-editors </a>
        </span>
    </nav>
    <section>
        <img src="/logo.png" id=logo alt="Logo of Mutawwir Blog"/>
        <p id="email">📫 Taha-ibn-Munawar@proton.me</p>
        <p id="phone-number">☎️  923099005046</p>
        <div>
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
        </div>
    </section>
</footer>

<style lang="scss">

footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2.5em;

    height: 15.5em;
    max-width: 100%;
    background-color: hsl(270, 100%, 90%);

    font-size: 1.2rem;

    @media (max-width: 800px) {
        font-size: 1rem;
    }

    @media (max-width: 700px) {
        column-gap: 1em;
    }

    @media (max-width: 650px) {
        column-gap: 0em;
    }

    @media (max-width: 600px) {
        grid-template-columns: fit-content(100%);
        grid-template-rows: 1fr 1fr;
        align-items: center;
        justify-content: center;

        height: 420px;
        padding-inline: 20px;
    }

    nav {
        display: flex;
        justify-self: right;

        width: min(400px, 90%);
        height: 100%;
        padding-top: 30px;

        @media (max-width: 600px) {
            justify-self: left;
        }

        span {
            display: inline-block;
            max-width: calc(50% - 10px);
            width: calc(50% - 10px);

            h2 {
                margin-block: 0 0.5em;

                font-size: 2em;
                color: var(--high-contrast);
            }
            a {
                display: block;

                color: var(--medium-contrast);
                font-size: 1em;
                text-decoration: none;
            }
            
        }
    }

    section {
        display: grid;
        grid-template: 
            "logo    email       " calc(3em + (30px - 2vw))
            "logo    phone-number" max-content
            ".       .           " 1fr
            "socials socials     " max-content
            ".       .           " 1fr
            / max-content fit-content(400px);
        column-gap: 20px;
        min-width: 0;
        max-width: 100%;
        height: 100%;

        padding-top: 30px;

        @media (max-width: 600px) {
            padding-top: 0;
        }

        #logo {
            grid-area: logo;

            width: 7em;
            height: 7em;

            border-radius: 10px;
            border: 2px solid #0005;
        }

        p {
            font-size: 1em;
            color: var(--medium-contrast);
            height: fit-content;
            margin: 0;

            &#email {
                margin-top: 10px;
                grid-area: email;
            }

            &#phone-number {
                grid-area: phone-number;
            }
        }

        div {
            display: flex;
            grid-area: socials;
            justify-content: space-around;

            height: fit-content;
            width: 100%;

            a {
                display: inline-block;
                height: 2.5em;
                width: 2.5em;

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
    }
}

</style>
