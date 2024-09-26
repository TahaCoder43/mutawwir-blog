<script lang="ts">
let thisContentRoll: HTMLElement;
export let currentPresentationIndex: number; 

$: updateCurrentSection(currentPresentationIndex, thisContentRoll)

function updateCurrentSection(currentPresentationIndex: number, thisContentRoll: HTMLElement) {
    try {
        const scrollPx = window.innerHeight * currentPresentationIndex
        thisContentRoll.scrollTo(0, scrollPx)
    } catch(err) {
        if (!(err instanceof ReferenceError || err instanceof TypeError)) {
            throw err
        }
        console.log("ReferenceError or TypeError, not important")
        return
    }
}

</script>

<section id="content-roll" bind:this={thisContentRoll}>
        <section>
            <h2>Introduction</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia. Include here what mutawwir means in arabic, and what hte blog is about
            </p>
            <a>Read</a>
        </section>
        <section>
            <h2>Coding</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia.
            </p>
            <a>Read</a>
        </section>
        <section>
            <h2>Linux</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia.
            </p>
            <a>Read</a>
        </section>
        <section>
            <h2>Dev-tools</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia.
            </p>
            <a>Read</a>
        </section>
        <section>
            <h2>IDE & Code-Editors</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non atque esse iure nisi adipisci
                quod quasi explicabo vero quibusdam, harum beatae iste alias, aliquam ullam laborum praesentium!
                Excepturi, officia.
            </p>
            <a>Read</a>
        </section>
    </section>

<style lang="scss">
    #content-roll {
        /* background-color: #ddddff; */
        width: 100%;
        overflow: hidden;
        scroll-behavior: smooth;

        section {
            display: flex;
            justify-content: center;
            flex-direction: column;

            height: 100%;
            padding-inline: 50px 20px;

            h2 {
                font-size: 5.5rem;
                font-family: var(--heading-font);
                font-weight: 700;
                text-transform: uppercase;
                color: var(--high-contrast);
                letter-spacing: -2px;
                line-height: 1.3em;

                margin-block: 0 
            }

            p {
                font-size: 1.5rem;
                color: var(--medium-contrast);
            }

            a {
                display: inline-block;
                align-self: flex-end;

                color: var(--hero-high-contrast);
                font-size: 2rem;
                font-weight: 700;

                width: fit-content;
                padding: 5px 10px;
                margin-right: 10px;

                background-color: var(--accent-color);
                border-radius: 5px;
                box-shadow: 
                    2px 4px 5px 2px #0004,
                    2px 4px 5px 2px #0004 inset,
                    -2px -4px 5px 3px #ffff,
                    -2px -4px 5px 2px #fff6 inset;

                &:hover {
                    box-shadow: 
                        2px 4px 5px 5px #0004,
                        2px 4px 5px 5px #0004 inset,
                        -2px -4px 5px 5px #ffff,
                        -2px -4px 5px 5px #fff6 inset;
                }
            }
        }
    }
</style>
