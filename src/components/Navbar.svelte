<script lang="ts">

</script>

<nav>
    <img src="/logo.jpg" alt="Logo for mutwawwir blog" id=logo />
    <span id=page-links>
        <a href="/">Home</a>
        <a href="/blogs/">Blogs</a>
        <a href="/about/">About me</a>
        <a href="/contact/">Contact me</a>
    </span>
    <span id=socials>
        <button id=instagram>
            <img src="/socials/bi--instagram.svg" />
        </button>
        <button id=linkedin>
            <img src="/socials/mingcute--linkedin-line.svg" />
        </button>
    </span>
</nav>

<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4.5rem;
        padding-inline: 20px;

        #logo {
            height: 4rem;
            border-radius: 100%;
        }

        #page-links {
            display: flex;
            column-gap: 20px;

            a {
                text-decoration: none;
                font-weight: 700;
                font-size: 1.2rem;
                color: #333
            }
        }

        #socials {
            display: flex;
            column-gap: 10px;

            button {
                width: 2rem;
                height: 2rem;
                background-color: transparent; 

                img {
                    width: 100%;
                }
            }
        }
    }
</style>
