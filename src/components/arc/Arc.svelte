<script lang="ts">

export let currentPresentationIndex: number;
let thisArcGradient: SVGLinearGradientElement;
let thisLinks: SVGElement;
let priorPresentatoinIndex: number = 0;
let textContrasts = new Array(5).map((_) => "");
const allArcOffsets = [
    ["0%", "20%", "40%"],
    ["20%", "40%", "48%"],
    ["32%", "48%", "64%"],
    ["48%", "64%", "80%"],
    ["64%", "80%", "96%"],
];

let priorArcOffsets: string[] = ["0%", "20%", "40%"];
let currentArcOffsets: string[] = ["0%", "20%", "40%"];
$: updateArc(currentPresentationIndex);
$: console.log(priorPresentatoinIndex, currentPresentationIndex, priorArcOffsets, currentArcOffsets);

function updateArc(currentPresentationIndex: number) {
    textContrasts[priorPresentatoinIndex] = "";
    textContrasts[currentPresentationIndex] = "highlight";

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

    if (thisLinks !== undefined) {
        let currentLink = thisLinks.querySelector(`path:nth-child(${currentPresentationIndex+1})`);
        let priorLink = thisLinks.querySelector(`path:nth-child(${priorPresentatoinIndex+1})`);
        if (currentLink === null || priorLink === null) {
            throw TypeError(`currentLink:${currentLink} or priorLink:${priorLink} should not be null`);
        };
        currentLink.classList.add("highlight");
        priorLink.classList.remove("highlight");
    };

    priorPresentatoinIndex = currentPresentationIndex;
}

</script>

<svg viewBox="-10 -10 399.18561 772.63708" version="1.1" id="svg1" xmlns="http://www.w3.org/2000/svg">
  <defs id="defs1">
    <rect x="2912.9219" y="272.64062" width="840.0495" height="140.49272" id="rect7" />
    <marker style="overflow:visible" id="marker5" refX="0" refY="0" orient="auto" markerWidth="1.001" markerHeight="1.001" viewBox="0 0 1 1" preserveAspectRatio="xMidYMid">
      <path transform="scale(0.5)" style="fill:context-stroke;fill-rule:evenodd;stroke:none" d="M 5,0 C 5,2.76 2.76,5 0,5 -2.76,5 -5,2.76 -5,0 c 0,-2.76 2.3,-5 5,-5 2.76,0 5,2.24 5,5 z" id="path5" />
    </marker>
    <rect x="2912.9219" y="272.64062" width="840.0495" height="140.49272" id="rect7-5" />
    <rect x="2912.9219" y="272.64062" width="781.13245" height="115.79289" id="rect7-5-5" />
    <rect x="2912.9219" y="272.64062" width="781.13245" height="115.79289" id="rect7-5-5-8" />
    <rect x="2912.9219" y="272.64062" width="1042.4069" height="143.88347" id="rect7-5-5-8-8" />
    <linearGradient id="arcGradient" gradientTransform="rotate(90)" bind:this={thisArcGradient}>
        <stop stop-color="hsl(200, 80%, 70%)">
            <animate attributeName="offset" from={priorArcOffsets[0]} to={currentArcOffsets[0]} repeatCount="1" dur="0.5s" fill="freeze" restart="always"/>
        </stop>
        <stop stop-color="hsl(270, 100%, 50%)">
            <animate attributeName="offset" from={priorArcOffsets[1]} to={currentArcOffsets[1]} repeatCount="1" dur="0.5s" fill="freeze" restart="always"/>
        </stop>
        <stop stop-color="hsl(230, 80%, 70%)">
            <animate attributeName="offset" from={priorArcOffsets[2]} to={currentArcOffsets[2]} repeatCount="1" dur="0.5s" fill="freeze" restart="always"/>
        </stop>
        <!-- <stop offset="0%" stop-color="hsl(270, 80%, 60%)"/> -->
        <!-- <stop offset="100%" stop-color="hsl(230, 80%, 60%)"/> -->
    </linearGradient>
    <linearGradient id="highlightLinkGradient">
        <stop offset="0%" stop-color="hsl(270, 100%, 80%)" />
        <stop offset="100%" stop-color="hsl(270, 80%, 50%)" />
    </linearGradient>
    <filter id="blur">
        <feGaussianBlur stdDeviation="10"/>
    </filter>
  </defs>
  <g id="layer1" transform="translate(-696.33604,18.800112)">
    <g id="g4" style="stroke:#131313;stroke-opacity:1">
      <path id="arc-glow" d="M 1094.7716,-18.050112 C 845.65181,68.908134 746.33144,647.7215 1082.8031,753.83697" />
      <path id="arc" d="M 1094.7716,-18.050112 C 845.65181,68.908134 746.33144,647.7215 1082.8031,753.83697"/>
      <g id="g1" style="stroke:#131313;stroke-width:1;stroke-dasharray:none;stroke-opacity:1" bind:this={thisLinks}>
        <path class="link" d="M 906.82498,152.61953 854.4767,108.24573" id="path2" />
        <path class="link" d="M 870.95339,261.08041 804.49312,234.86126" id="path2-5" />
        <path class="link" d="m 847.99276,380.59415 -71.65322,-0.37274" id="path2-0" />
        <path class="link" d="m 858.59285,504.97881 -67.79374,26.97025" id="path2-9" />
        <path class="link" d="M 890.56799,612.72703 834.31928,662.0913" id="path2-9-8" />
      </g>
      <g id="g3">
        <text xml:space="preserve" transform="matrix(0.25541301,0,0,0.25541301,-49.841603,13.95271)" id="text7" style="shape-inside:url(#rect7);" class={textContrasts[0]}>
            <tspan x="2912.9219" y="301.56444" id="tspan4">Introduction</tspan>
        </text>
        <text xml:space="preserve" transform="matrix(0.25541301,0,0,0.25541301,-49.242232,158.09264)" id="text7-2" style="shape-inside:url(#rect7-5);" class={textContrasts[1]}>
            <tspan x="2912.9219" y="301.56444" id="tspan5">Coding</tspan>
        </text> <text xml:space="preserve" transform="matrix(0.25541301,0,0,0.25541301,-49.841603,308.05047)" id="text7-2-0" style="shape-inside:url(#rect7-5-5);" class={textContrasts[2]}> <tspan x="2912.9219" y="301.56444" id="tspan6">Linux</tspan>
        </text>
        <text xml:space="preserve" transform="matrix(0.25541301,0,0,0.25541301,-48.806326,484.56782)" id="text7-2-0-9" style="shape-inside:url(#rect7-5-5-8);" class={textContrasts[3]}>
            <tspan x="2912.9219" y="301.56444" id="tspan7">Dev  Tools</tspan>
        </text>
        <text xml:space="preserve" transform="matrix(0.25541301,0,0,0.25541301,-55.15589,609.9949)" id="text7-2-0-9-3" style="shape-inside:url(#rect7-5-5-8-8);" class={textContrasts[4]}>
            <tspan x="2933.7285" y="322.37108" id="tspan8">IDE &amp; Code-Editor </tspan>
        </text>
      </g>
    </g>
  </g>
</svg>

<style lang="scss">
    svg {
        height: 100%;
        flex-shrink: 0;

        #arc {
            fill:none;
            stroke:url(#arcGradient);
            stroke-width: 5;
            stroke-dasharray: 102, 10;
            stroke-dashoffset: 8.25;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        #arc-glow {
            fill:none;
            stroke:url(#arcGradient);
            stroke-width: 10;
            stroke-dasharray: 102, 10;
            stroke-dashoffset: 8.25;
            stroke-linecap: round;
            stroke-linejoin: round;
            filter: url(#blur);
        }

        .link {
            fill:none;
            stroke:#131313;
            stroke-width:1;
            stroke-linecap:round;
            stroke-linejoin:round;
            stroke-dasharray:none;
            stroke-opacity:1;
            marker-end:url(#marker5);
            transition: stroke 0.5s, stroke-width 0.5s, filter 0.5s;

            &.highlight {
                stroke: url(#highlightLinkGradient);
                stroke-width: 2;
                filter: drop-shadow(0px 0px 5px var(--accent-color));
            }
        }

        text {
            font-size:106.667px;
            line-height:0;
            stroke:none;
            display:inline;
            fill:#aaa;
            transition: fill 0.5s, font-weight 0.5s, font-size 0.5s, filter 0.5s;

            &.highlight {
                fill: var(--accent-color);
                font-weight: 700;
                font-size: 120px !important;
                filter: drop-shadow(0px 0px 5px var(--accent-color));
            }
        }
    }
</style>
