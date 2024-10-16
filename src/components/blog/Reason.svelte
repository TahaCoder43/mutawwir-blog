<script lang="ts">

import infoBarStore from "../../../public/scripts/blog/infoBarStore"
import reasonStore from "../../../public/scripts/blog/reasonStore"

let reasonIndex = $reasonStore.currentReasonIndex;

reasonStore.update((store) => {
    store.currentReasonIndex++;
    return store
});

function handleClick() {
    infoBarStore.update((store) => {
        if (store.visible) {
            let sameReasonClicked = store.reasonToShowIndex == reasonIndex
            if (sameReasonClicked) {
                store.visible = false
            }
        } else {
            store.visible = true
        }
        store.reasonToShowIndex = reasonIndex;
        return store;
    });
};

</script>

<button on:click={handleClick}>Reason</button>

<style lang="scss">

button {
    display: inline-block;
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    font-size: 0.8em;
    box-shadow: 1px 2px 3px 1px #0005;
    margin-inline: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #111;
    }
}

</style>
