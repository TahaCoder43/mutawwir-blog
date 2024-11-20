<script lang="ts">

import { getContext } from "svelte";

export let href: string;
let thisAnchor: HTMLAnchorElement;
let blogsInfoStickLimit:number = getContext("blogsInfoStickLimit");


function getElementToScrollTo(link: EventTarget): [HTMLElement, string] | null {
    if (!("href" in link && typeof link.href === "string")) {
        throw TypeError("link should have attribute href and href type should be string");
    };

    const hashIndex = link.href.indexOf("#");
    const hash = link.href.slice(hashIndex);
    const elementType = hash === "#main" ? "h1" : "section";
    const element = document.querySelector(`${elementType}${hash}`);

    if (element === null) {
        console.error("element to scroll to is null");
        return null;
    };

    if (!(element instanceof HTMLElement)) {
        throw TypeError("You can only scroll to HTMlElement");
    };

    return [element, hash];
}

function getBlogInfoelementPosition(section: HTMLElement) {
    if (
        section.parentElement === null ||
        section.parentElement.parentElement === null ||
        section.parentElement.parentElement.parentElement === null ||
        section.parentElement.parentElement.parentElement.parentElement === null
    ) {
        throw TypeError("section should have parents till great great grandparent");
    };

    const contentRoll = section.parentElement;
    const blogsInfoStickLimitParent = section.parentElement.parentElement.parentElement.parentElement;

    const sectionIndex = Array.from(contentRoll.children).indexOf(section);
    const sectionOffsetTop = (blogsInfoStickLimit / 5) * sectionIndex;

    console.log("ancestors offset:", sectionOffsetTop, blogsInfoStickLimitParent.offsetTop);

    const scrollToPx = blogsInfoStickLimitParent.offsetTop + sectionOffsetTop + 1;
    return scrollToPx;
    }

function prepareHandleClick(link: HTMLAnchorElement) {
    const result = getElementToScrollTo(link);
    if (result === null) {
        return;
    };
    const [element, hash] = result;

    let scrollToPx = element.offsetTop;
    let scrollBehaviour: ScrollBehavior = "smooth" ;


    switch (hash.slice(1)) {
        case "main":
            scrollToPx = 0;
            break;
        case "introduction":
            scrollToPx = getBlogInfoelementPosition(element);
            break;
        case "coding":
            scrollToPx = getBlogInfoelementPosition(element);
            break;
        case "linux":
            scrollToPx = getBlogInfoelementPosition(element);
            break;
        case "dev-tools":
            scrollToPx = getBlogInfoelementPosition(element);
            break;
        case "ide":
            scrollToPx = getBlogInfoelementPosition(element);
            break;
    }

    console.log("scrollToPx:", scrollToPx);

    return () => {
        scrollTo({top: scrollToPx, behavior: scrollBehaviour});
    };
}

</script>

<a {href} on:click|preventDefault={prepareHandleClick(thisAnchor)} bind:this={thisAnchor}>
    <slot />
</a>

<style lang="scss">
    a {
        font-size: 1.01rem;
        font-weight: bold;
        color: rgba(var(--light), var(--light), var(--light), 0.6);
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: rgba(var(--light), var(--light), var(--light), 1);
        }
    }
</style>
