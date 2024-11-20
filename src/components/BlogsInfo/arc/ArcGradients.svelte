<script lang="ts">

export let currentPresentationIndex: number;
let priorPresentatoinIndex: number = 0;

const allArcOffsets = [
    ["0%", "20%", "40%"],
    ["20%", "40%", "48%"],
    ["32%", "48%", "64%"],
    ["48%", "64%", "80%"],
    ["64%", "80%", "96%"],
];
let priorArcOffsets: string[] = ["0%", "20%", "40%"];
let currentArcOffsets: string[] = ["0%", "20%", "40%"];

let thisArcGradient: SVGLinearGradientElement;

$: animateGradients(currentPresentationIndex)

function animateGradients(currentPresentationIndex: number) {
    priorArcOffsets = allArcOffsets[priorPresentatoinIndex];
    currentArcOffsets = allArcOffsets[currentPresentationIndex];
    if (thisArcGradient !== undefined) {
        Array.from(thisArcGradient.children).map(stop => stop.firstChild).forEach(animate => {
            if (!(animate instanceof SVGAnimateElement)) {
                throw TypeError("thisArcGradient should have <animate/> as children");
            };
            animate.beginElement();
        });
    };

    priorPresentatoinIndex = currentPresentationIndex
}

</script>

<linearGradient id="arcGradient" gradientTransform={`rotate(90)`} bind:this={thisArcGradient}>
    <stop stop-color="hsl(200, 80%, 70%)">
        <animate attributeName="offset" from={priorArcOffsets[0]} to={currentArcOffsets[0]} repeatCount="1" dur="0.5s" fill="freeze" restart="always"/>
    </stop>
    <stop stop-color="hsl(270, 100%, 50%)">
        <animate attributeName="offset" from={priorArcOffsets[1]} to={currentArcOffsets[1]} repeatCount="1" dur="0.5s" fill="freeze" restart="always"/>
    </stop>
    <stop stop-color="hsl(230, 80%, 70%)">
        <animate attributeName="offset" from={priorArcOffsets[2]} to={currentArcOffsets[2]} repeatCount="1" dur="0.5s" fill="freeze" restart="always"/>
    </stop>
</linearGradient>
<linearGradient id="highlightLinkGradient">
    <stop offset="0%" stop-color="hsl(270, 100%, 80%)" />
    <stop offset="100%" stop-color="hsl(270, 80%, 50%)" />
</linearGradient>
