<template>
    <navDefault />

    <heroHomepage
        mode="dark"
    >
      <template #heroTitle v-if="story.content.body[0].hero_homepage_title">
        {{ story.content.body[0].hero_homepage_title }}
      </template>
      <template #heroText v-if="story.content.body[0].hero_homepage_text">
        {{ story.content.body[0].hero_homepage_text }}
      </template>
      <template #ctaText>
        <Btn 
          href="/pricing/" 
          mode="dark" 
          size="large" 
          colour="blue"
        >
          See pricing and free trial
        </Btn>
      </template>
    </heroHomepage>


</template>

<script setup >
const story = await useAsyncStoryblok("home", { version: "draft" });
console.log(story);

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
</script>