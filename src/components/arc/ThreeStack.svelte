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
            width: 80%;

            border: 2px solid var(--accent-color);
            box-shadow: 3px 5px 10px 2px #000a;
            border-radius: 5px;
            transform: skew(0deg, 15deg) rotateY(20deg);

            --top: -30px;

            &:nth-child(1) {
                right: -20px;
                top: var(--top);
            }

            &:nth-child(2) {
                top: calc(-50px + var(--top));
            }

            &:nth-child(3) {
                top: calc(-100px + var(--top));
                left: -20px;
            }
        }
    }
</style>
