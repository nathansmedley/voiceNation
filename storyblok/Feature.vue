<template>
  <div v-editable="blok">
    <h3>
      {{ blok.name }}
    </h3>
  </div>
</template>
 
<script setup>
  defineProps({ blok: Object })
</script>