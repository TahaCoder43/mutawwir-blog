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
            <a>Coding</a>
            <a>Linux</a>
            <a>Infrastructure</a>
            <a>Dev-Tools & IDE</a>
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
    column-gap: 50px;

    height: 300px;
    width: 100%;
    background-color: hsl(270, 100%, 90%);

    nav {
        display: flex;
        justify-self: right;
        align-items: top;

        width: 400px;
        height: 100%;
        padding-top: 30px;

        span {
            display: inline-block;
            max-width: calc(50% - 10px);
            width: calc(50% - 10px);

            h2 {
                margin-block: 0 0.5em;

                font-size: 2.5rem;
                color: var(--high-contrast);
            }
            a {
                display: block;

                color: var(--medium-contrast);
                font-size: 1.2rem;
                text-decoration: none;
            }
            
        }
    }

    section {
        display: grid;
        grid-template: 
            "logo    email       " 50px
            "logo    phone-number" max-content
            "socials socials     " 1fr
            / max-content max-content;
        column-gap: 20px;

        padding-top: 30px;

        #logo {
            grid-area: logo;

            width: 8rem;
            height: 8rem;

            border-radius: 10px;
            border: 2px solid #0005;
        }

        h2 {
            grid-area: company-name;
            margin: 10px 0 0 0;

            color: var(--high-contrast);
            font-family: var(--heading-font);
            font-size: 2rem;
        }

        p {
            font-size: 1.2rem;
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
            padding-block: 30px;

            a {
                display: inline-block;
                height: 3rem;
                width: 3rem;

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
