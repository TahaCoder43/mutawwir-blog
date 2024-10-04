<section id="hero">
    <div id="content">
        <h1 id=main>
            <div id="darken"></div>
            The <span class="highlight">Mutawwir</span> Blog
        </h1>
        <p>
            Read about coding, linux, softwares, TUI, CLI tools, Dev tools, IDE, frameworks, web development and
            much more.
        </p>
        <div id="action-menu">
            <a href="/blog/" data-title="Go to blog page">Read!</a>
            <a href="/about-me/" data-title="Go to about-me page">About me!</a>
        </div>
    </div>
</section>

<style lang="scss">
    #hero {
        height: calc(100vh - var(--navbar-height));

        #content {
            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: center;

            text-align: center;
            width: min-content;
            height: calc(100vh - var(--navbar-height));
            margin-inline: auto;
            padding-bottom: 200px;

            h1 {
                position: relative;

                width: max-content;
                margin-top: 80px;
                margin-bottom: 20px;

                font-family: var(--heading-font);
                font-size: 4rem;
                color: var(--hero-high-contrast);
                text-transform: uppercase;

                span.highlight {
                    color: var(--accent-color);
                }

                #darken {
                    position: absolute;
                    left: -10%;
                    top: -20px;
                    width: 120%;
                    height: 280px;
                    background-color: #000d;
                    border-radius: 25%;
                    filter: blur(150px);
                    /* backdrop-filter: blur(10px); */
                    /* background-color: #0005; */
                    /* box-shadow: 2px 5px 20px 2px #000e; */
                    z-index: -1;
                }
            }

            p {
                font-size: 1.2rem;
                color: var(--hero-low-contrast);
                justify-self: center;
                width: 100%;
            }

            #action-menu {
                margin-top: 20px;
                a {
                    display: inline-block;

                    font-size: 1.8rem;
                    font-weight: 700;
                    text-decoration: none;

                    width: fit-content;
                    height: fit-content;

                    border-radius: 5px;

                    &[href="/blog/"] {
                        background-color: var(--accent-color);
                        color: var(--hero-high-contrast);
                        padding: 5px 10px;
                        margin-right: 20px;
                    }

                    &[href="/about-me/"] {
                        color: var(--accent-color);
                        border: 2px solid var(--accent-color);
                        padding: 3px 6px;
                    }
                }
            }
        }
    }
</style>
