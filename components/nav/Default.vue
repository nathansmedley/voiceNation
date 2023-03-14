<template>
    <header class="header">
        <div class="header__nav">
            <NuxtLink class="header__nav__logo" to="/">
                <nuxt-img class="header__nav__logo__img" src="global/main-logo.png" />
            </NuxtLink>
            <nav class="header__nav__menu" aria-labelledby="primary-navigation">
                <ul class="header__nav__menu__wrapper">
                    <li class="header__nav__menu__wrapper__item">Solutions</li>
                    <li class="header__nav__menu__wrapper__item">Industries</li>
                    <li class="header__nav__menu__wrapper__item"><NuxtLink to="pricing">Pricing</NuxtLink></li>
                    <li class="header__nav__menu__wrapper__item">Free Trial</li>
                    <li class="header__nav__menu__wrapper__item header__nav__menu__wrapper__item--online">833-456-789</li>
                </ul>
            </nav>
        </div>
        <div class="header__subnav">
            <nav class="header__subnav__menu" aria-labelledby="secondary-navigation">
                <ul class="header__subnav__menu__wrapper">
                    <li class="header__subnav__menu__wrapper__item">Support</li>
                    <li class="header__subnav__menu__wrapper__item">Login</li>
                    <li class="header__subnav__menu__wrapper__item">About</li>
                    <li class="header__subnav__menu__wrapper__item">Resources</li>
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
    justify-content:space-between;

    &__nav {
        display:flex;
        align-items:center;
        padding:50px 0 0 60px;
        column-gap:70px;

        &__logo {
            width:290px;

            &__img {
                width:100%;
            }
        }

        &__menu {
            &__wrapper {
                display:flex;
                column-gap: 40px;

                &__item {
                    &--online {
                        &:before {
                            width:19px;
                            height:19px;
                            background:$green;
                            box-shadow: 0px 0px 0px 4px rgba($green, 0.62);
                            border-radius:50%;
                            display:inline-block;
                            content:'';
                        }
                    }

                    &--offline {
                        &:before {
                            width:19px;
                            height:19px;
                            background:$orange;
                            box-shadow: 0px 0px 0px 4px rgba($orange, 0.62);
                            border-radius:50%;
                            display:inline-block;
                            content:'';
                        }
                    }
                }
            }
        }
    }

    &__subnav {
        padding:25px 30px 0 0;

        &__menu {
            &__wrapper {
                display:flex;
                column-gap: 25px;

                &__item {
                    
                }
            }
        }
    }
}

</style>