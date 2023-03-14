<template>
    <div
      class="hero"
    >
      <div class="hero__content">
        <h2 
          class="hero__content__title"
          :class="`hero__content__text--${mode}`"
          v-if="$slots.heroTitle"
        >
          <slot name="heroTitle"></slot>
        </h2>

        <p 
          class="hero__content__text"
          :class="`hero__content__text--${mode}`"
          v-if="$slots.heroText"
        >
          <slot name="heroText"></slot>
        </p>
      </div><!--hero__content-->
        
    </div><!--hero-->
  </template>
   
<script>
  export default {
    props: {
      mode: {
        type: String,
        default: 'dark',
      },
    }
  }
</script>

<style lang="scss" scoped>
.hero {

  &--dark {

    &__wrapper {
      background:$navy;
    }
  }
}

</style>