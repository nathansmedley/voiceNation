<template>
    <header class="header">
        <div class="header__nav">
            <NuxtLink to="/">
                <h1>VoiceNation</h1>
            </NuxtLink>
            <nav class="header_nav" aria-labelledby="primary-navigation">
                <ul>
                    <li>Solutions</li>
                    <li>Industries</li>
                    <li>Pricing</li>
                    <li>Free Trial</li>
                    <li>833-456-789</li>
                </ul>
            </nav>
        </div>
        <div class="header__subnav">
            <nav aria-labelledby="secondary-navigation">
                <ul>
                    <li>Support</li>
                    <li>Login</li>
                    <li>About</li>
                    <li>Resources</li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
</script>

<style lang="scss">

.header {
    width:100%;
    display:flex;

    &__nav {

    }

    &__subnav {

    }
}

</style>