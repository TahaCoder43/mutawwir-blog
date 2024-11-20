<script lang="ts">

import Coding from "./arc/Coding.svelte";
import ThreeStack from "./arc/ThreeStack.svelte";

</script>

<div class="image-container">
    <img src="/arc/introduction.svg" alt="Computer screen with blog posts"/>
</div>
<div class="image-container">
    <Coding/>
</div>
<div class="image-container">
    <ThreeStack>
        <img src="/arc/linux/tmux-with-btop-gitui-lf.png" class=window alt="tmux with btop, gitui, lf"/>
        <img src="/arc/linux/inkscape-code-logo.png" class=window alt="inkscape on alpine and sway"/>
        <img src="/arc/linux/sway-demonstration.png" class=window alt="research and code"/>
    </ThreeStack>
</div>
<div class="image-container">
    <img src="/arc/dev-tools.png" alt="Illustration of docker linking to python backend, javascript frontend and postgres database with there respective tools"/>
</div>
<div class="image-container">
    <ThreeStack>
        <img src="/arc/ide/dashboard-nvim.png" class=window alt="Neovim startup dashboard, using dasboard.nvim"/> <img src="/arc/ide/nvim-nvchad.png" class=window alt="Beutiful neovim coding setup"/>
        <img src="/arc/ide/nvim-git.png" class=window alt="Power of gitui, all inside neovim"/>
    </ThreeStack>
</div>

<style lang="scss">
.image-container {
    display: flex;
    align-items: center;
    overflow: visible;

    @media (max-width: 800px) {
        min-width: 100%;
        height: 100%;
        justify-content: center;
    }

    > img {
        height: 23vw;

        @media (max-width: 1100px) {
            height: 28vw;
        }

        @media (max-width: 800px) {
            height: 90%;
            width: auto;
            margin-top: 5%;
        }
    }

    @media (max-width: 800px) {
        &:nth-child(2) {
            position: relative;
            top: calc(20px + (10vh - 80px));
            align-items: flex-start;
        }

        &:nth-child(4) {
            position: relative;
            top: -20px;
        }
    }
}
</style>
