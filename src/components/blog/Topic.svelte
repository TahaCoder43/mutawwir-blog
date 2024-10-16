<script lang="ts">
    export let imgSrc: string = "";

</script>


<div class="topic">
    <img src={imgSrc}/>
    <div class="cover">
        <slot />
    </div>
</div>

<style lang="scss">

.topic {
    position: relative;

    min-width: 350px;
    width: 350px;
    height: 250px;
    overflow: hidden;

    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .cover {
        position: absolute;
        left: 0;
        top: 0;

        width: 100%;
        height: 100%;
        padding-inline: 20px;

        text-align: center;
        align-content: center;
        font-size: 3rem;
        font-weight: 700;
        color: #fff;

        background-color: #0008;
    }
}

</style>
