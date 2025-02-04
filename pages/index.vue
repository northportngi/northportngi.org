<script setup>
	const storyblokApi = useStoryblokApi()
	const { data: story } = await useAsyncData('home', () => storyblokApi.get('cdn/stories/home', { version: 'published' }))
</script>
<template>
	<main>
		<Home :blok="story.data.story.content" />
	</main>
</template>
