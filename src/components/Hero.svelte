<section id="hero">
    <div id="content">
        <h1 id=main>
            <div id="darken"></div>
            The <span class="highlight">Mutawwir</span> Blog
        </h1>
        <p>
            Cut to the Code, No-Nonsense Tech Blogs about Coding, Linux, Dev-tools, IDEs, Infrastructure and more!
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
        overflow: hidden;

        #content {
            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: center;

            text-align: center;
            height: calc(100vh - var(--navbar-height));
            margin-inline: auto;
            padding-bottom: 200px;
            font-size: 1rem;

            @media (max-width: 600px) {
                font-size: 0.9rem;
            }

            @media (max-width: 450px) {
                font-size: 0.8rem;
            }
            
            @media (max-width: 340px) {
                font-size: 0.7rem;
            }

            h1 {
                position: relative;

                width: min(750px, 90vw);
                margin-top: 80px;
                margin-bottom: 20px;
                margin-inline: auto;

                font-family: var(--heading-font);
                font-size: 4em;
                color: var(--hero-high-contrast);
                text-transform: uppercase;

                span.highlight {
                    color: var(--accent-color);
                }

                #darken { // this is causing the overflowing issues
                    position: absolute;
                    left: -10%;
                    top: -20px;
                    width: 120%;
                    height: 280px;
                    background-color: #000d;
                    border-radius: 25%;
                    filter: blur(150px);
                    z-index: -1;
                }
            }

            p {
                font-size: 1.5em;
                color: var(--hero-low-contrast);
                justify-self: center;
                width: min(750px, 90vw);
                margin-inline: auto;
            }

            #action-menu {
                margin-top: 20px;
                a {
                    display: inline-block;

                    font-size: 1.8em;
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
