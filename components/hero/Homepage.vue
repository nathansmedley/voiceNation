<template>
    <div
      class="hero"
      :class="`hero--${mode}`"
    >
    </div><!--hero-->
  </template>
   
<script>
  export default {
    props: {
      side: {
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