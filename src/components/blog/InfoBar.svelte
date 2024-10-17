<script lang="ts">

import infoBarStore from "../../../public/scripts/blog/infoBarStore";

export let reasons: string[];

</script>

<aside id=info-bar class:visible={$infoBarStore.visible}>
    <h2>Reasons</h2>
    <p> {reasons[$infoBarStore.reasonToShowIndex]} </p>
</aside>

<style lang="scss">

#info-bar {
    position: fixed;
    z-index: 999;
    right: -300px;
    top: 0;

    width: 300px;
    height: 100%;
    padding-top: 30px;
    padding-left: 10px;

    background-color: hsl(270, 100%, 90%);
    border-left: solid 5px hsl(270, 50%, 60%);
    /* background-color: #fff9; */
    /* backdrop-filter: blur(10px); */
    /* border-left: solid 2px #fffd; */
    transition: right 0.3s;

    &.visible {
        right: 0;
    }

    h2 {
        font-size: 2.5rem;
        font-family: var(--heading-font);
        color: var(--high-contrast);
        margin-bottom: 0px;
    }

    p {
        font-size: 1rem;
        color: var(--medium-contrast);
    }
}

</style>
