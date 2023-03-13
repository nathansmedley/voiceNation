<template>
    <div v-editable="blok">
      <h3>
        {{ blok.name }}
      </h3>
    </div>
  </template>
   
<script setup>
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories/config', {
    version: 'draft',
  })
    
  const headerMenu = ref(null)
  headerMenu.value = data.story.content.header_menu
</script>