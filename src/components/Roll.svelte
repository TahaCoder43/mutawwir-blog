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

<section id="content-roll" bind:this={thisContentRoll} >
    <slot/>
</section>

<style lang="scss">
    #content-roll {
        /* background-color: #ddddff; */
        width: 100%;
        overflow: hidden;
        scroll-behavior: smooth;

        :global(> *) {
            height: 100%;
        }
    }
</style>
