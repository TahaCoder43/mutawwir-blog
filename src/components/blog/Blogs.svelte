<script lang="ts">

import type { CollectionEntry } from "astro:content"
import BlogCard from "./BlogCard.svelte"
import New from "../svgs/New.svelte"
import Code from "../svgs/Code.svelte"
import Linux from "../svgs/Linux.svelte"
import DevTools from "../svgs/Dev-Tools.svelte"
import Neovim from "../svgs/Neovim.svelte"

export let blogs: CollectionEntry<"blog">[];

let thisBlogsContainer: HTMLDivElement;
let hash: string = "";
let blogsScroll = 0;
$: onThisBlogsContainerChange(thisBlogsContainer)
$: blogsScrollVar = `--blogs-scroll: ${blogsScroll}px;`

const startScroll = 4.5 * 16

function onThisBlogsContainerChange(thisBlogsContainer: HTMLDivElement | undefined) {
    if (thisBlogsContainer === undefined) {
        blogsScroll = 0
        return
    }
    blogsScroll = thisBlogsContainer.scrollHeight - thisBlogsContainer.clientHeight
    handleHashChange({newURL: location.href})
    handleScroll()
}

function handleScroll() {
    const scrollTop = document.documentElement.scrollTop

    console.log(scrollTop, startScroll)

    if (thisBlogsContainer === undefined) {
        return;
    }
    if (scrollTop < startScroll) {
        thisBlogsContainer.scrollTop = 0;
        return;
    }

    console.log("passed the guards")
    let blogsContainerScrollTop = scrollTop - startScroll;
    if (blogsContainerScrollTop > blogsScroll) {
        blogsContainerScrollTop = blogsScroll
    }
    console.log("blogsContainerSCrollTop", blogsContainerScrollTop)
    thisBlogsContainer.scrollTop = blogsContainerScrollTop
    console.log("actual scrollTop", thisBlogsContainer.scrollTop)
}

function handleHashChange({newURL}: HashChangeEvent | {newURL: string}) {
    let match = newURL.match("(?<=#).*")

    if (match == null) {
        console.error("hashtag is null")
        return
    }
    hash = match[0]

}

</script>

<svelte:document on:scroll={handleScroll} />
<svelte:window on:hashchange={handleHashChange} />

<div id="blogs-stick-limit" style={blogsScrollVar}>
    <article>
        <nav>
            <a href="#" title="Read new blogs">
                <New/>
            </a>
            <a href="#coding" title="Read coding related blogs">
                <Code/>
            </a>
            <a href="#linux" title="Read linux related blogs">
                <Linux/>
            </a>
            <a href="#dev-tools" title="Read dev-tools related blogs">
                <DevTools/>
            </a>
            <a href="#ide" title="Read IDE & Code-editor related blogs">
                <Neovim/>
            </a>
        </nav>
        <h1>Fresh Blogs</h1>
        <div id="blogs-container" bind:this={thisBlogsContainer} >
            {#if hash === ""}
                {#each blogs as blog}
                    <BlogCard blog={blog.data} name={blog.slug} />
                {/each}
            {:else}
                {#each blogs as blog}
                    {#if blog.data.tags[0].toLowerCase() === hash}
                        <BlogCard blog={blog.data} name={blog.slug} />
                    {/if}
                {/each}
            {/if}
        </div>
    </article>
</div>

<style lang="scss">
    #blogs-stick-limit {
        height: calc(100vh + var(--blogs-scroll));
    }

    article {
        position: sticky;
        top: 0;

        display: grid;
        grid-template:
            "sidebar header" min-content
            "sidebar blogs " 1fr
            / 80px 1fr;
        column-gap: 20px;
        height: 100vh;

        nav {
            grid-area: sidebar;
            margin: 0;
            background-color: #0002;
            padding-top: 50px;

            a {
                display: block;

                color: #000;

                width: 70%;
                max-height: fit-content;
                aspect-ratio: 1;
                margin-bottom: 30px;
                margin-inline: auto;
                padding: 8px;

                box-shadow: 2px 3px 5px 2px #0004;
                border-radius: 100%;
            }
        }

        h1 {
            font-size: 3rem;
            font-family: var(--heading-font);
            color: var(--high-contrast);
            margin-block: 30px;
        }

        #blogs-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            grid-auto-rows: 250px;
            row-gap: 20px;
            overflow: scroll;

            height: 100%;
            padding-bottom: 50px;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
</style>
