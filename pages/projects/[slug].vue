<script setup>
	const config = useRuntimeConfig()
	const route = useRoute()
	const slug = route.params.slug
	const storyblokApi = useStoryblokApi()
	const { data: post } = await useAsyncData(slug, () => storyblokApi.get(`cdn/stories/content/${slug}`, { version: 'published' }))
	const entry = post.value.data.story
</script>

<template>
	<!-- <pre>
			{{ entry }}
		</pre
			> -->
	<article class="news-entry">
		<!-- BANNER -->
		<div class="banner green-bg-pattern clr-cream">
			<div class="pblock-8">
				<div class="container container--1100 text-center">
					<h1 class="banner__header fs-xl regular clr-yellow mb-2">{{ entry.name }}</h1>
					<p>{{ entry.content.teaser }}</p>
				</div>
			</div>
		</div>
		<div class="container container--800 mblock-8">
			<nuxt-img v-if="entry.content.show_cover_image_on_page" :src="entry.content.cover_image.filename" provider="storyblok" alt="Cover Image" width="600" height="350" format="webp" style="width: 100%; height: 100%" />
			<StoryblokRichText :doc="entry.content.body" />
		</div>
	</article>
</template>

<style lang="scss" scoped></style>
