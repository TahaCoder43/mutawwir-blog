<script lang="ts">

import BouncyButton from "./BouncyButton.svelte";

</script>

<section id=introduction>
    <h2>Introduction</h2>
    <p>
        Blog site dedicated to providing, to the point blogs related to various topics such as linux, coding, dev-tools, vector design e.t.c. Mutawwir (Arabic: مطوّر) means a developer, mutawwir blog aims to give developers information on many technologies!
    </p>
    <BouncyButton title="Go to blogs overview"> Overview </BouncyButton>
</section>
<section id=coding>
    <h2>Coding</h2>
    <p>
        Related to popular programming languages, frameworks and libraries, such as python, rust, svelte e.t.c. We also (if we can) put a "cut to the code" button that will take you straight to practical!
    </p>
    <BouncyButton title="Go to coding blogs">Learn</BouncyButton>
</section>
<section id=linux>
    <h2>Linux</h2>
    <p>
        About installing linux operating systems, which one is good and why, and installing softwares on linux, compatibility support, working with linux and more InshaAllah!
    </p>
    <BouncyButton title="Go to linux blogs">Read</BouncyButton>
</section>
<section id=dev-tools>
    <h2>Dev-tools</h2>
    <p>
        Will InshaAllah include tools for compatibility, running containers, improved workflow, AI, Installers and others!
    </p>
    <BouncyButton title="Go to dev-tools blogs">Find out</BouncyButton>
</section>
<section id=ide>
    <h2>IDE & Code-Editors</h2>
    <p>
        Mostly related to neovim, but may InshaAllah review other editors as well!
    </p>
    <BouncyButton title="Go to IDE blogs">Check out</BouncyButton>
</section>

<style lang="scss">

section {
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding-inline: 50px 20px;

    font-size: 1rem;

    @media (max-width: 1100px) {
        font-size: 0.8rem;
    }

    @media (max-width: 870px) {
        font-size: 0.7rem;
    }

    @media (max-width: 800px) {
        font-size: calc(0.6vw + 1.3vh - 2px);
        padding-inline: 6vw;
    }

    h2 {
        font-size: 5.5em;
        font-family: var(--heading-font);
        font-weight: 700;
        text-transform: uppercase;
        color: var(--high-contrast);
        letter-spacing: -2px;
        line-height: 1.3em;

        margin-block: 0;

        @media (max-width: 1250px) {
            font-size: 4.8em;
        }

        @media (max-width: 1000px) {
            font-size: 4.5em;
        }

        @media (max-width: 950px) {
            font-size: 4em;
        }
   }

    p {
        font-size: 1.5em;
        color: var(--medium-contrast);
    }
}

</style>
