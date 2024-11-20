<script lang="ts">

export let href: string | null = null, title: string | null = null;

let clicked = false;

function handleClick() {
    clicked = true
    setTimeout(() => {clicked = false}, 350);
    
}

</script>

<a on:click={handleClick} {href} class:clicked={clicked} title={title}>
    <slot/>
</a>

<style lang="scss">
    a {
        display: inline-block;
        align-self: flex-end;

        color: var(--color);
        font-size: var(--font-size);
        font-weight: 700;
        text-decoration: none;

        width: fit-content;
        padding: 5px 10px;
        margin-right: 10px;

        user-select: none;
        background-color: var(--background-color);
        border-radius: 5px;
        box-shadow: 
            2px 4px 5px 2px #0004,
            -2px -4px 5px 2px #0004 inset,
            -2px -4px 5px 3px #ffff,
            2px 4px 5px 2px #fff6 inset;
        transition: none;

        --color: var(--hero-high-contrast);
        --background-color: var(--accent-color);
        --font-size: 2em;

        &.clicked {
            transform: scale(0.98, 1.02);
            transition: transform 0.3s cubic-bezier(0.3, 20, 0.6, -40);
        }
    }

</style>
