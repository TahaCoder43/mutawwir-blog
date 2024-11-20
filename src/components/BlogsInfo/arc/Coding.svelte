<script lang="ts">
// rust, python, go, typescript, javascript, html, css, kotlin
// flask
// react, next.js, svelte, astro,
// mysql, postgressql
// bash

const circles = ["python", "javascript", "rust", "kotlin", "html", "css", "go", "bash", "typescript", "react", "nextjs", "mysql", "postgresql", "svelte", "astro", "flask"]


</script>

<div id=grid>
    {#each circles as circle}
        <div class=circle>
            <img src={`/arc/coding/${circle}.svg`} alt={circle}/>
        </div>
    {/each}
</div>
<div id=fade/>

<style lang="scss">

    #grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 5%;
        
        height: min(400px, 80vw);
        min-width: min(400px, 80vw);
        width: min(400px, 80vw);
        padding: 15px;

        .circle {
            display: flex;
            align-items: center;
            justify-content: center;

            height: 100%;
            width: 100%;

            background-color: #ffffff;
            border-radius: 100%;
            overflow: hidden;
            box-shadow: 3px 5px 5px 2px #0004;

            img {
                width: 80%;
                height: 80%;
                aspect-ratio: 1/1;
                object-fit: contain;
            }
        }
    }

    #fade {
        position: absolute;
        right: 0;
        height: 100%;
        width: 100px;

        background-image: linear-gradient(to right, transparent, #f0f0f0aa);

        @media (max-width: 800px) {
            right: auto;
            bottom: 0;

            width: 100%;
            height: 150px;

            background-image: linear-gradient(to bottom, transparent, #f0f0f0aa);
        }
    }

</style>
