<div id=stack>
    <img src="/linux/1.png" alt="tmux with btop, gitui, lf"/>
    <img src="/linux/2.png" alt="inkscape on alpine and sway"/>
    <img src="/linux/3.png" alt="research and code"/>
</div>

<style lang="scss">
    #stack {
        height: 350px;
        width: 350px;

        img {
            position: relative;
            display: block;

            margin-inline: auto;
            width: 80%;

            border: 2px solid var(--accent-color);
            box-shadow: 3px 5px 10px 2px #000a;
            border-radius: 5px;
            transform: skewY(15deg) rotateY(20deg);

            &:nth-child(1) {
                right: -20px;
            }

            &:nth-child(2) {
                top: -50px;
            }

            &:nth-child(3) {
                top: -100px;
                left: -20px;
            }
        }
    }
</style>
