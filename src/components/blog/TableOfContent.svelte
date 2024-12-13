<script lang="ts">

import type { MarkdownHeading } from "astro";

export let headings: MarkdownHeading[];

</script>

<article>
    <nav>
        {#each headings as heading}
            <a href={"#" + heading.slug}> {heading.text} </a>
        {/each}
    </nav>
    <input type=checkbox id="toggle-table-of-content"/>
    <label for="toggle-table-of-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H3m13 6H3M16 6H3m18 6h.01M21 18h.01M21 6h.01" />
        </svg>
    </label> 
</article>

<style lang="scss">

article {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 10;

    width: calc(2.5rem + 16px);
    height: calc(2.5rem + 16px);

    background-color: hsl(270, 90%, 80%);
    border-radius: 3rem;
    transition: background-color 0.3s, width 0.3s, height 0.3s, border-radius 0.3s, overflow 0s 0.3s;

    nav {
        padding: 20px 0 0 20px;


        opacity: 0;
        visibility: hidden;
        transition: none;
        counter-reset: links;

        a {
            position: relative;
            counter-increment: links;
            display: block;

            margin: 0 0 10px var(--list-marker-size);

            color: var(--high-contrast);
            font-size: 1.5rem;
            font-weight: bold;
            --list-marker-size: 1.3em;

            &::before {
                content: counter(links);
                display: inline-block;

                position: absolute;
                left: calc((var(--list-marker-size) + var(--margin-right)) * -1);

                text-align: center;
                text-decoration: none;
                align-content: center;

                width: var(--list-marker-size);
                height: var(--list-marker-size);
                min-width: var(--list-marker-size);
                min-height: var(--list-marker-size);
                --margin-right: 10px;

                background-color: hsl(270, 80%, 70%);
            }
        }
    }

    input[type=checkbox] {
        display: none;
    }

    label {
        position: absolute;
        bottom: 0;
        right: 0;
        display: inline-block;
        width: fit-content;
        aspect-ratio: 1/1;
        padding: 8px;

        font-size: 2.5rem;
        line-height: 0;


        border-radius: 100%;

        transition: right 0.3s, bottom 0.3s, background-color 0.3s, box-shadow 0.3s;
    }

    &:not(:has(input[type=checkbox]:checked)):hover {
        background-color: hsl(270, 100%, 75%);
    }

    input[type=checkbox]:checked ~ label {
        bottom: 10px;
        right: 10px;
        background-color: hsl(270, 90%, 80%);
        box-shadow: 2px 3px 5px 2px #0005;
        transition: right 0.3s, bottom 0.3s, background-color 0.3s 0.3s, box-shadow 0.3s 0.3s;
    }

    nav:has(~ input[type=checkbox]:checked) {
        opacity: 1;
        visibility: visible;

        transition: opacity 0.5s 0.3s;
    }

    &:has(input[type=checkbox]:checked) {
        width: min(80%, 300px);
        height: 400px;

        overflow: scroll;
        background-color: #ddd;
        border-radius: 11px;
        box-shadow: 2px 3px 5px 2px #0004;
    }

}

</style>


