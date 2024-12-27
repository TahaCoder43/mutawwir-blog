<script lang="ts"> 

console.log("comes here maybe")

function isHTMLImageElement(element: Element): element is HTMLImageElement {
    return (element instanceof HTMLImageElement)
}

function updateAspectRatio(thisImageGrid: HTMLDivElement | undefined, columns: number) {
    if (thisImageGrid === undefined) {
        console.log("thisImageGrid is undefined")
        return
    }
    console.log("thisImageGrid is defined now")
    let images: Element[] = Array.from(thisImageGrid.children[0].children)

    for (let rowFirstImageIndex = 0; rowFirstImageIndex < images.length; rowFirstImageIndex+=columns) {
        console.log("looops")
        let total_aspect_ratios = 0
        let row = images.slice(rowFirstImageIndex, rowFirstImageIndex+columns)
        for (let image of row) {
            if (!isHTMLImageElement(image)) {
                console.error("Children should all be images")
                return 
            }
            total_aspect_ratios += image.naturalWidth / image.naturalHeight
        }

        for (let image of row) {
            if (!isHTMLImageElement(image)) {
                console.error("Children should all be images")
                return 
            }
            let aspect_ratio = image.naturalWidth / image.naturalHeight
            let columnSpan = Math.round((aspect_ratio / total_aspect_ratios) * realGridColumns)
            image.style.gridColumn = `span ${columnSpan}`
        }
    }

}

export let rows: number, columns: number
let realGridColumns:number = 1000;
let thisImageGrid: HTMLDivElement;

$: updateAspectRatio(thisImageGrid, columns)
if (rows === undefined) {
    console.error("Rows are not provided")
}

if (columns === undefined) {
    console.error("Columns are not provided")
}

</script>

<div class=image-grid style={`--rows: ${rows}; --columns: ${realGridColumns};`} bind:this={thisImageGrid}>
    <slot/>
</div>

<style lang="scss">

div.image-grid {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
    width: 100%;

    :global(img) {
        width: 100%;
        height: auto;
    }
}

</style>


