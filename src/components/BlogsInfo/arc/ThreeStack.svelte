<div id=stack>
    <slot />
</div>

<style lang="scss">
    #stack {
        height: 350px;
        width: 350px;
        position: relative;

        :global(.window) {
            position: relative;
            display: block;

            margin-inline: auto;
            width: 90%;

            border: 2px solid var(--accent-color);
            box-shadow: 3px 5px 10px 2px #000a;
            border-radius: 5px;
            transform: skew(0deg, 15deg) rotateY(20deg);

            --top: -2vw + (100px - 8vw);

            @media (max-width: 800px) {
                width: calc(44px + 20vh);
                --top: calc(30px + (128px - 16vh));
            }

            @media (max-width: 500px) {
                width: calc(30px + 15vh);
                --top: calc(50px + (128px - 16vh));
            }

            &:nth-child(1) {
                right: -20px;
                top: var(--top);
            }

            &:nth-child(2) {
                top: calc(-4vw + var(--top));
            }

            &:nth-child(3) {
                top: calc(-8vw + var(--top));
                left: -20px;
            }
        }
    }
</style>
