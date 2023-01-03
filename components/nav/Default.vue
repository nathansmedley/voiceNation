<template>
    <header class="header">
        <div class="header__wrapper">
            <img src="~/assets/images/logo-white.webp" alt="Discover Nuxt 3" />

            <nav class="header__nav">
                <ul>
                    <li v-for="(title, link) in navigationData">
                        {{ title }}
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    const { navigationData } = await import('~/data/navigationData.json')
    export default {
        name: "Default Nav Component",
        data() {
            return {
                navigationData: ""
            };
        }
    };
</script>

<style lang="scss">

.header {
    height:132px;
    background:$navy;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;

    &__wrapper {
        
    }

}

</style>