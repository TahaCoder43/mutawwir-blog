<script lang="ts">

import ArcMarker from "./ArcMarker.svelte"
import ArcGradients from "./ArcGradients.svelte"
import useIsMobile from "../../../lib/useIsMobile.ts"
import FadeBlogsInfo from "../FadeBlogsInfo.svelte";

export let currentPresentationIndex: number;
let thisLinks: SVGElement;
let priorPresentatoinIndex: number = 0;
let textContrasts = new Array(5).map((_) => "");
let isMobile = useIsMobile();

$: updateArc(currentPresentationIndex);

function updateArc(currentPresentationIndex: number) {
    textContrasts[priorPresentatoinIndex] = "";
    textContrasts[currentPresentationIndex] = "highlight";

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

{#if $isMobile}
<div id="arc-fade-wrapper">
    <FadeBlogsInfo/>
    <svg viewBox="0 0 826.58673 343.32941" version="1.1" id="svg1" xmlns="http://www.w3.org/2000/svg">
        <defs id="defs1">
            <ArcMarker />
            <ArcGradients {currentPresentationIndex} />
            <filter id="blur">
                <feGaussianBlur stdDeviation="10"/>
            </filter>
        </defs>
        <g id="layer1" transform="translate(-248.13987,-1705.3687)">
            <g id="g27">
                <g id="g15" style="stroke:#131313;stroke-opacity:1" transform="matrix(-0.01073167,0.99994241,0.99994241,0.01073167,286.7208,952.30504)">
                    <path id="arc-glow" d="M 1095.9861,-26.07066 C 823.75524,41.955844 758.68738,657.23973 1083.4477,798.929" />
                    <path id="arc" d="M 1095.9861,-26.07066 C 823.75524,41.955844 758.68738,657.23973 1083.4477,798.929" />
                    <g id="g9" style="stroke:#131313;stroke-width:1;stroke-dasharray:none;stroke-opacity:1" transform="translate(6.1092625,0.06556637)" bind:this={thisLinks}>
                        <path class="link" d="M 907.04464,132.15204 854.69636,87.778239" id="path4" />
                        <path class="link" d="M 866.98098,247.68355 800.52071,221.4644" id="path6" />
                        <path class="link" d="m 847.99276,380.59415 -71.65322,-0.37274" id="path7" />
                        <path class="link" d="m 864.13245,504.73423 -67.79374,26.97025" id="path8" />
                        <path class="link" d="m 898.63994,628.76389 -56.24871,49.36427" id="path9" />
                    </g>
                </g>
                <g id="g23" style="stroke:none;stroke-opacity:1" transform="translate(-117.76514,1024.3582)">
                    <text transform="matrix(0.25541301,0,0,0.25541301,-339.97826,695.59088)" id="text19" class={textContrasts[0]}>
                        <tspan x="2912.9219" y="301.56444" id="tspan1">
                            Introduction
                        </tspan>
                    </text>
                    <text transform="matrix(0.25541301,0,0,0.25541301,-162.638,647.23204)" id="text20" class={textContrasts[1]}>
                        <tspan x="2912.9219" y="301.56444" id="tspan2">
                            Coding
                        </tspan>
                    </text>
                    <text transform="matrix(0.25541301,0,0,0.25541301,-3.2923761,623.05799)" id="text21" class={textContrasts[2]}>
                        <tspan x="2912.9219" y="301.56444" id="tspan3">
                            Linux
                        </tspan>
                    </text>
                    <text transform="matrix(0.25541301,0,0,0.25541301,98.396724,645.98605)" id="text22" class={textContrasts[3]}>
                        <tspan x="2912.9219" y="301.56444" id="tspan4">
                            Dev  Tools
                        </tspan>
                    </text>
                    <text transform="matrix(0.25541301,0,0,0.25541301,207.31119,684.72462)" id="text23" class={textContrasts[4]}>
                        <tspan x="2933.7285" y="322.37108" id="tspan5">
                            IDE &amp; Code-Editor
                        </tspan>
                    </text>
                </g>
            </g>
        </g>
    </svg>
</div>
{:else}
<svg viewBox="-10 -10 399.18561 772.63708" version="1.1" id="svg1" xmlns="http://www.w3.org/2000/svg">
    <defs id="defs1">
        <ArcMarker/>
        <ArcGradients {currentPresentationIndex} />
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
                <text transform="matrix(0.25541301,0,0,0.25541301,-49.841603,13.95271)" id="text7" class={textContrasts[0]}>
                    <tspan x="2912.9219" y="301.56444" id="tspan4">Introduction</tspan>
                </text>
                <text transform="matrix(0.25541301,0,0,0.25541301,-49.242232,158.09264)" id="text7-2" class={textContrasts[1]}>
                    <tspan x="2912.9219" y="301.56444" id="tspan5">Coding</tspan>
                </text>
                <text transform="matrix(0.25541301,0,0,0.25541301,-49.841603,308.05047)" id="text7-2-0" class={textContrasts[2]}> <tspan x="2912.9219" y="301.56444" id="tspan6">Linux</tspan>
                </text>
                <text transform="matrix(0.25541301,0,0,0.25541301,-48.806326,484.56782)" id="text7-2-0-9" class={textContrasts[3]}>
                    <tspan x="2912.9219" y="301.56444" id="tspan7">Dev Tools</tspan>
                </text>
                <text transform="matrix(0.25541301,0,0,0.25541301,-55.15589,609.9949)" id="text7-2-0-9-3" class={textContrasts[4]}>
                    <tspan x="2933.7285" y="322.37108" id="tspan8">IDE &amp; Code-Editor </tspan>
                </text>
            </g>
        </g>
    </g>
</svg>
{/if}

<style lang="scss">
    div#arc-fade-wrapper {
        position: relative;
        flex-shrink: 0;
    }

    svg {
        height: 100%;
        flex-shrink: 0;

        @media (max-width: 800px) {
            height: auto;
            width: 100%;
            /* display: none; */
        }

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
