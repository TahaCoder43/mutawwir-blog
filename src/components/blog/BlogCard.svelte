<script lang="ts">

import {type CollectionEntry } from "astro:content"

export let blog: CollectionEntry<'blog'>["data"];
export let name: CollectionEntry<"blog">["slug"]

</script>

<article class="blog">
    {#if blog.img !== undefined}
        <img src={blog.img.path} alt={blog.img.alt} />
    {:else}
        <p>Show default blog background image here `^`</p>
    {/if}
    <a href={`/blog/${name}`} title={`Read ${blog.title}`}>Read</a>
    <div class="fade-content">
        <h2 class="title">{blog.title}</h2>
        <p class="description">
            {blog.description}
        </p>
        <footer>
            <span class="tags">
                {#each blog.tags as tag}
                    <span> {tag} </span>
                {/each}
            </span>
            <time datetime={blog.publishDate.toISOString().split("T")[0]}>
                {blog.publishDate.toLocaleString("en-GB", {dateStyle: "medium"})}
            </time>
            <span class="seperator">|</span>
            <span class={"dificulty " + blog.dificulty.toLowerCase()}>{blog.dificulty}</span>
        </footer>
    </div>
</article>

<style lang="scss">

*::-webkit-scrollbar {
    height: 2px;
}

.blog {
    position: relative;

    min-width: 350px;
    width: 350px;
    height: 250px;
    overflow: hidden;

    border-radius: 10px;
    box-shadow: 3px 5px 5px 2px #0002;


    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: filter 0.3s;
    }
    
    > a {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;

        height: 100%;
        width: 100%;

        color: var(--hero-high-contrast);
        font-family: var(--heading-font);
        font-size: 3rem;
        text-decoration: none;
        text-align: center;
        align-content: center;

        opacity: 0;
        transition: opacity 0.3s, backdrop-filter 0.3s;
    }

    &:hover {
        > .fade-content {
            opacity: 0;
        }

        >a {
            opacity: 1;
            backdrop-filter: brightness(0.7);
        }
    }

    > .fade-content {
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: fit-content;
        padding: 10px 10px;

        background-image: linear-gradient(to bottom, #0000, #0008 40px, #000a);
        transition: opacity 0.3s;

        > .title {
            font-family: var(--heading-font);
            font-size: 1.2rem;
            color: var(--hero-high-contrast);
            width: fit-content;

            margin: 20px 0 5px 0;
        }

        > .description {
            font-size: 0.9rem;
            color: var(--hero-medium-contrast);
            width: fit-content;

            margin: 0 0 10px 0;
        }

        > footer {
            display: grid;
            grid-template-columns: 1fr max-content max-content max-content;
            column-gap: 5px;
            align-items: center;

            width: 100%;
            height: fit-content;
            margin: 0 0 5px 0;

            font-size: 0.8rem;
            
            > * {
                padding-bottom: 5px;
            }

            > .tags {
                display: flex;
                flex-wrap: nowrap;
                justify-self: start;

                width: 100%;
                height: min-content;

                overflow: scroll;
                mask-image: linear-gradient(to right, #000 80%, transparent);

                > span {
                    display: inline-block;
                    flex-shrink: 0;

                    color: var(--hero-high-contrast);

                    padding: 2px 3px;
                    margin-right: 5px;
                    height: fit-content;

                    background-color: #caf3;
                    border-radius: 3px;
                }
            }

            > time {
                justify-self: flex-end;
                color: var(--hero-low-contrast);
                flex-shrink: 0;
            }

            > .seperator {
                display: inline-block;
                color: var(--hero-medium-contrast);
                flex-shrink: 0;
            }

            > .dificulty {
                display: inline-block;
                justify-self: flex-end;

                font-weight: 700;
                color: white;

                flex-shrink: 0;
                padding-inline: 3px;
                padding-bottom: 0;
                margin-bottom: 5px;
                border-radius: 3px;

                &.easy {
                    background-color: green;
                }

                &.normal {
                    background-color: blue;
                }

                &.hard {
                    background-color: red;
                }
            }
        }
    }

}

</style>

