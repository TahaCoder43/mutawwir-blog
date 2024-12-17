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
let scriptedGap = 20;

$: onThisBlogsContainerChange(thisBlogsContainer)
$: blogsScrollVar = `--blogs-scroll: ${blogsScroll}px;`
$: scriptedGapVar = `--scripted-gap: ${scriptedGap}px;`

const startScroll = 4.5 * 16

function onThisBlogsContainerChange(thisBlogsContainer: HTMLDivElement | undefined) {
    if (thisBlogsContainer === undefined) {
        blogsScroll = 0
        return
    }
    blogsScroll = thisBlogsContainer.scrollHeight - thisBlogsContainer.clientHeight
    handleHashChange({newURL: location.href})
    handleDocumentScroll()
    setScriptedGap(thisBlogsContainer)
}

function blogHasContent(blog: CollectionEntry<"blog">) {
    const hasIntroductoryHeading = /^\n*(\nimport[^\n]*from[^\n]*)*\n*##/.test(blog.body)
    return hasIntroductoryHeading
}

function setScriptedGap(thisBlogsContainer: HTMLDivElement) {
    if (window.innerWidth < 470) {
        return
    }
    const containerWidth = thisBlogsContainer.clientWidth;
    const blogCardWidth = thisBlogsContainer.children[0].clientWidth;
    const minimumGap = 20
    const containerRowBlogCount = Math.floor(containerWidth / (blogCardWidth + minimumGap))
    const extraSpace = (containerWidth % (blogCardWidth + minimumGap))
    const extraGap = extraSpace / containerRowBlogCount
    scriptedGap = minimumGap + extraGap
    console.log("runs")
    console.log("containerRowBlogCount", containerRowBlogCount)
    

}

function handleWindowResize() {
    setScriptedGap(thisBlogsContainer)
}

function handleDocumentScroll() {
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

<svelte:document on:scroll={handleDocumentScroll} />
<svelte:window on:hashchange={handleHashChange} on:resize={handleWindowResize} />

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
        <div id="blogs-container" bind:this={thisBlogsContainer} style={scriptedGapVar}>
            {#if hash === ""}
                {#each blogs as blog}
                    {@debug blog}
                    {#if blogHasContent(blog)}
                        <BlogCard blog={blog.data} name={blog.slug} />
                    {/if}
                {/each}
            {:else}
                {#each blogs as blog}
                    {#if blog.data.tags[0].toLowerCase() === hash && blogHasContent(blog)}
                        {@debug blog}
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

        @media (max-width: 469px) {
            grid-template:
                "header" min-content
                "blogs " 1fr
                / 1fr;
        }

        nav {
            grid-area: sidebar;
            margin: 0;
            background-color: #ddd;
            padding-top: 50px;

            @media (max-width: 469px) {
                position: absolute;
                bottom: 20px;
                left: 0;
                right: 0;
                z-index: 2;

                display: flex;
                column-gap: var(--gap);

                padding: 10px var(--gap);
                margin-inline: var(--gap);

                border: 1px solid #fffc;
                box-shadow: 2px 3px 5px 2px #0004;
                border-radius: 20px;
                background-color: #fff8;
                backdrop-filter: blur(20px) saturate(1.5);

                --gap: calc(20px + (10vw - 47px));
            }

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

                @media (max-width: 469px) {
                    margin-bottom: 0;
                    width: 100%;
                    background-color: #fff5;
                }
            }
        }

        h1 {
            font-size: 3rem;
            font-family: var(--heading-font);
            color: var(--high-contrast);
            margin-block: 30px;

            @media (max-width: 469px) {
                text-align: center;
            }
        }

        #blogs-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, 350px);
            grid-auto-rows: max-content;
            gap: 20px var(--scripted-gap);
            justify-content: flex-start;

            height: 100%;
            padding-bottom: 50px;
            padding-right: var(--scripted-gap);
            overflow: hidden;
            --scripted-gap: 20px;

            &::-webkit-scrollbar {
                display: none;
            }

            @media (min-width: 980px) and (max-width: 1209px) {
                grid-template-columns: repeat(auto-fit, 420px);
            }

            @media (min-width: 540px) and (max-width: 839px) {
                grid-template-columns: repeat(auto-fit, 420px);
            }

            @media (max-width: 370px) {
                grid-template-columns: 315px;
            }

            @media (max-width: 469px) {
                justify-self: center;
                padding-right: 0;
                gap: 20px;
            }
        }
    }
</style>
