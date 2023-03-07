<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
    <h1>Test Page</h1>
</template>

<script setup>
    const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>