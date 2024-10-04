<div class="blog">
    <div class="banner">
        <img src="/blog/SnowycapsMilkyway.jpg" alt="Snowcaps Mountains with milkyway glaxy visible on the sky"/>
        <div class="fade-content">
            <h2 class="title">Alpine Linux Experience</h2>
            <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis atque beatae
            </p>
            <footer>
                <span class="tags">
                    <span>Linux</span>
                    <span>Alpine</span>
                    <span>Open-Rc</span>
                    <span>Musl-C</span>
                </span>
                <time>04 Oct 2024</time>
                <span class="seperator">|</span>
                <span class="dificulty hard">Hard</span>
            </footer>
        </div>
    </div>
    <!-- <div class="border"></div> -->
</div>

<style lang="scss">

.blog {
    min-width: 350px;
    width: 350px;
    height: 250px;
    overflow: hidden;

    border-radius: 10px;
    box-shadow: 3px 5px 5px 2px #0002;


    .banner {
        position: relative;

        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .fade-content {
            position: absolute;
            bottom: 0;
            left: 0;

            width: 100%;
            height: fit-content;
            padding: 10px 10px;

            background-image: linear-gradient(to bottom, #0000, #0008 40px, #000a);
            transition: backdrop-filter 0.5s;


            .title {
                font-family: var(--heading-font);
                font-size: 1.2rem;
                color: var(--hero-high-contrast);
                width: fit-content;

                margin: 20px 0 5px 0;
            }

            .description {
                font-size: 0.9rem;
                color: var(--hero-medium-contrast);
                width: fit-content;

                margin: 0 0 10px 0;
            }

            footer {
                display: flex;
                align-items: center;

                min-width: max-content;
                height: fit-content;
                margin: 0 0 5px 0;

                font-size: 0.8rem;

                .tags {
                    justify-self: flex-start;

                    width: 100%;
                    height: min-content;

                    overflow-x: scroll;

                    span {
                        display: inline-block;

                        color: var(--hero-high-contrast);

                        padding: 2px 3px;
                        height: fit-content;

                        background-color: #caf3;
                        border-radius: 3px;
                    }
                }

                time {
                    justify-self: flex-end;
                    color: var(--hero-low-contrast);
                    min-width: max-content;
                }

                .seperator {
                    display: inline-block;
                    padding-inline: 5px;
                    color: var(--hero-medium-contrast);
                }

                .dificulty {
                    display: inline-block;
                    justify-self: flex-end;

                    font-weight: 700;
                    color: white;

                    min-width: max-content;
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

        &:hover {
            .fade-content {
                backdrop-filter: blur(10px);
            }
        }

    }

}

</style>

