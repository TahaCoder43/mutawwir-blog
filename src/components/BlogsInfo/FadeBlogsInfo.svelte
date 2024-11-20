<div class={["fade", "top"].join(" ")}></div>
<div class={["fade", "bottom"].join(" ")}></div>

<style lang="scss">
    .fade {
        position: absolute;

        width: 100%;
        height: 100px;
        z-index: 100;

        background-image: linear-gradient(var(--direction), transparent, var(--color-background) 80%);

        &.top {
            top: 0;
            --direction: to top;

            @media (max-width: 800px) {
                left: 0;
                top: auto;
                --direction: to left;
            }
        }

        &.bottom {
            bottom: 0;
            --direction: to bottom;

            @media (max-width: 800px) {
                right: 0;
                bottom: auto;
                --direction: to right;
            }
        }

        @media (max-width: 800px) {
            width: min(100px, 15vw);
            height: 100%;
            /* display: none; */
        }
    }
</style>
